import fs from "fs";
import path from "path";
import chokidar from "chokidar";

// Configuration
const SUPPORTED_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];
const IGNORED_FILES = ["index.ts", "index.tsx", "index.js", "index.jsx"];
const SRC_DIR = process.cwd(); // This is already the src directory when running from package.json
const WATCH_DIRS = [
  "components",
  "types",
  "constants",
  "lib",
  "hooks",
  "utils",
];

// Logging configuration
const VERBOSE =
  process.argv.includes("--verbose") || process.argv.includes("-v");
const SUMMARY_MODE =
  process.argv.includes("--summary") || process.argv.includes("-s");

// Function to check if a file has exports
const hasExports = (filePath: string): boolean => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return /export\s+(default|const|function|class|type|interface|enum)/.test(
      content
    );
  } catch (error) {
    console.error(`❌ Error reading file ${filePath}:`, error);
    return false;
  }
};

// Function to get export type and name
const getExportInfo = (
  filePath: string
): { type: "default" | "named"; name?: string } => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Check for default export
    const defaultExportMatch = content.match(/export\s+default\s+(\w+)/);
    if (defaultExportMatch) {
      return { type: "default", name: defaultExportMatch[1] };
    }

    // Check for const export
    const constExportMatch = content.match(
      /export\s+(?:const|let|var)\s+(\w+)/
    );
    if (constExportMatch) {
      return { type: "named", name: constExportMatch[1] };
    }

    return { type: "named" };
  } catch (error) {
    console.error(`❌ Error reading file ${filePath}:`, error);
    return { type: "named" };
  }
};

// Function to recursively scan a folder and collect exports
const collectExports = (
  folderPath: string,
  basePath: string = folderPath
): string[] => {
  let exports: string[] = [];
  let fileCount = 0;

  try {
    fs.readdirSync(folderPath).forEach((file: string) => {
      const filePath: string = path.join(folderPath, file);
      const relativePath: string = path.relative(basePath, filePath);
      const fileStat = fs.statSync(filePath);

      if (fileStat.isDirectory()) {
        // When processing the main directory, we want to include all files from subdirectories
        // But the import paths should be relative to the main directory (basePath)
        const subExports = collectExports(filePath, basePath);
        exports = exports.concat(subExports);
      } else if (
        fileStat.isFile() &&
        SUPPORTED_EXTENSIONS.some((ext) => file.endsWith(ext)) &&
        !IGNORED_FILES.includes(file) &&
        hasExports(filePath)
      ) {
        fileCount++;
        const exportInfo = getExportInfo(filePath);
        const importPath = relativePath.replace(/\.[^.]+$/, ""); // Remove extension

        if (exportInfo.type === "default" && exportInfo.name) {
          exports.push(
            `export { default as ${exportInfo.name} } from "./${importPath}";`
          );
        } else if (exportInfo.type === "named" && exportInfo.name) {
          exports.push(`export { ${exportInfo.name} } from "./${importPath}";`);
        } else {
          exports.push(`export * from "./${importPath}";`);
        }
        if (VERBOSE) {
          console.log(`  ✅ Found exports in: ${relativePath}`);
        }
      }
    });
  } catch (error) {
    console.error(`❌ Error reading directory ${folderPath}:`, error);
  }

  if (fileCount > 0 && !VERBOSE && !SUMMARY_MODE) {
    console.log(
      `  ✅ Found ${fileCount} files with exports in ${path.relative(
        SRC_DIR,
        folderPath
      )}`
    );
  }

  return exports;
};

// Function to generate index.ts for a directory
const createIndexFile = (dirPath: string): void => {
  if (!SUMMARY_MODE) {
    console.log(`🔍 Processing directory: ${path.relative(SRC_DIR, dirPath)}`);
  }

  const exports: string[] = collectExports(dirPath);

  if (exports.length > 0) {
    const indexPath = path.join(dirPath, "index.ts");
    fs.writeFileSync(indexPath, exports.join("\n") + "\n", "utf-8");
    if (!SUMMARY_MODE) {
      console.log(`  📌 Generated: ${path.relative(SRC_DIR, indexPath)}\n`);
    } else {
      // Always log when an index file is generated, even in summary mode
      console.log(`  📌 Generated: ${path.relative(SRC_DIR, indexPath)}`);
    }
  } else if (!SUMMARY_MODE) {
    console.warn(
      `  ⚠️ No exports found in ${path.relative(SRC_DIR, dirPath)}, skipping.\n`
    );
  }
};

// Function to generate exports for specific directories
const generateExports = (dirNames?: string[]): void => {
  if (!SUMMARY_MODE) {
    console.log("\n🚀 Starting export generation...\n");
  }

  const directoriesToProcess = dirNames || WATCH_DIRS;
  let totalExports = 0;
  let processedDirs = 0;

  directoriesToProcess.forEach((dirName: string) => {
    const dirPath = path.join(SRC_DIR, dirName);
    if (fs.existsSync(dirPath)) {
      if (!SUMMARY_MODE) {
        console.log(`\n📦 Processing ${dirName} directory...`);
      }

      // Count exports before processing
      const beforeExports = collectExports(dirPath).length;

      // Process the directory
      createIndexFile(dirPath);

      // Count exports after processing
      const afterExports = collectExports(dirPath).length;

      totalExports += afterExports;
      processedDirs++;
    } else if (!SUMMARY_MODE) {
      console.warn(
        `⚠️ Directory not found: ${path.relative(SRC_DIR, dirPath)}`
      );
    }
  });

  if (SUMMARY_MODE) {
    console.log(
      `📊 Summary: Generated ${totalExports} exports in ${processedDirs} directories`
    );
  } else {
    console.log("\n🎉 Export generation completed!\n");
  }
};

// Function to watch directories for changes
const watchDirectories = (): void => {
  console.log("👀 Watching for file changes...\n");

  const watcher = chokidar.watch(SRC_DIR, {
    ignored: IGNORED_FILES,
    persistent: true,
    depth: 99,
    ignoreInitial: true,
  });

  watcher
    .on("add", (filePath) => {
      // Always log when a file is added, even in summary mode
      console.log(`📄 Added: ${path.relative(SRC_DIR, filePath)}`);

      // Get the main directory for this file
      const relativePath = path.relative(SRC_DIR, filePath);
      const mainDir = relativePath.split(path.sep)[0]; // Get the first directory in the path

      // Only process if it's in one of our watched directories
      if (WATCH_DIRS.includes(mainDir)) {
        const mainDirPath = path.join(SRC_DIR, mainDir);
        createIndexFile(mainDirPath);
      }
    })
    .on("change", (filePath) => {
      // Always log when a file is changed, even in summary mode
      console.log(`📝 Changed: ${path.relative(SRC_DIR, filePath)}`);

      // Get the main directory for this file
      const relativePath = path.relative(SRC_DIR, filePath);
      const mainDir = relativePath.split(path.sep)[0]; // Get the first directory in the path

      // Only process if it's in one of our watched directories
      if (WATCH_DIRS.includes(mainDir)) {
        const mainDirPath = path.join(SRC_DIR, mainDir);
        createIndexFile(mainDirPath);
      }
    })
    .on("unlink", (filePath) => {
      // Always log when a file is removed, even in summary mode
      console.log(`🗑️ Removed: ${path.relative(SRC_DIR, filePath)}`);

      // Get the main directory for this file
      const relativePath = path.relative(SRC_DIR, filePath);
      const mainDir = relativePath.split(path.sep)[0]; // Get the first directory in the path

      // Only process if it's in one of our watched directories
      if (WATCH_DIRS.includes(mainDir)) {
        const mainDirPath = path.join(SRC_DIR, mainDir);
        createIndexFile(mainDirPath);
      }
    })
    .on("error", (error: unknown) => {
      if (error instanceof Error) {
        console.error(`❌ Error watching files: ${error.message}`);
      } else {
        console.error(`❌ Error watching files: ${String(error)}`);
      }
    });
};

// Function to manually check for new files
const checkForNewFiles = (dirNames?: string[]): void => {
  if (VERBOSE) {
    console.log("\n🔍 Manually checking for new files...\n");
  }

  const directoriesToCheck = dirNames || WATCH_DIRS;
  let changesDetected = false;

  directoriesToCheck.forEach((dirName: string) => {
    const dirPath = path.join(SRC_DIR, dirName);
    if (fs.existsSync(dirPath)) {
      if (VERBOSE) {
        console.log(`\n📦 Checking ${dirName} directory...`);
      }

      // Store the current exports
      const beforeExports = collectExports(dirPath).length;

      // Process the main directory only
      createIndexFile(dirPath);

      // Check if there were any changes
      const afterExports = collectExports(dirPath).length;
      if (beforeExports !== afterExports) {
        changesDetected = true;
        // Log when changes are detected in manual check
        console.log(`  ✅ Changes detected in ${dirName} directory`);
      }
    }
  });

  if (changesDetected && !VERBOSE) {
    console.log("✅ Manual check completed with changes detected!");
  } else if (VERBOSE) {
    console.log("\n✅ Manual check completed!\n");
  }
};

// Run if executed directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const watchMode = args.includes("--watch") || args.includes("-w");
  const dirNames = args.filter(
    (arg) => !arg.startsWith("--") && !arg.startsWith("-")
  );

  if (watchMode) {
    // Generate exports first, then watch
    generateExports(dirNames.length > 0 ? dirNames : undefined);

    // Set up a periodic check for new files (every 5 seconds)
    setInterval(() => {
      checkForNewFiles(dirNames.length > 0 ? dirNames : undefined);
    }, 5000);

    // Start watching for changes
    watchDirectories();
  } else {
    // Just generate exports
    generateExports(dirNames.length > 0 ? dirNames : undefined);
  }
}

module.exports = { generateExports, watchDirectories, checkForNewFiles };
