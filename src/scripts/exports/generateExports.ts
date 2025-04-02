import fs from "fs";
import path from "path";
import chokidar from "chokidar";

// Configuration
const SUPPORTED_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];
const IGNORED_FILES = ["index.ts", "index.tsx", "index.js", "index.jsx"];
const SRC_DIR = process.cwd();
const WATCH_DIRS = [
    "components",
    "types",
    "constants",
    "lib",
    "hooks",
    "utils",
];

// Function to check if a file has exports
const hasExports = (filePath: string): boolean => {
    const content = fs.readFileSync(filePath, "utf-8");
    return /export\s+(default|const|function|class|type|interface|enum)/.test(
        content
    );
};

// Function to get export type and name
const getExportInfo = (
    filePath: string
): { type: "default" | "named"; name?: string } => {
    const content = fs.readFileSync(filePath, "utf-8");

    // Check for default export
    const defaultExportMatch = content.match(/export\s+default\s+(\w+)/);
    if (defaultExportMatch) {
        return { type: "default", name: defaultExportMatch[1] };
    }

    // Check for const export
    const constExportMatch = content.match(/export\s+(?:const|let|var)\s+(\w+)/);
    if (constExportMatch) {
        return { type: "named", name: constExportMatch[1] };
    }

    return { type: "named" };
};

// Function to recursively scan a folder and collect exports
const collectExports = (
    folderPath: string,
    basePath: string = folderPath
): string[] => {
    let exports: string[] = [];

    fs.readdirSync(folderPath).forEach((file: string) => {
        const filePath: string = path.join(folderPath, file);
        const relativePath: string = path.relative(basePath, filePath);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            exports = exports.concat(collectExports(filePath, basePath));
        } else if (
            fileStat.isFile() &&
            SUPPORTED_EXTENSIONS.some((ext) => file.endsWith(ext)) &&
            !IGNORED_FILES.includes(file) &&
            hasExports(filePath)
        ) {
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
            console.log(`  ✅ Found exports in: ${relativePath}`);
        }
    });

    return exports;
};

// Function to generate index.ts for a directory
const createIndexFile = (dirPath: string): void => {
    console.log(`🔍 Processing directory: ${dirPath}`);

    const exports: string[] = collectExports(dirPath);

    if (exports.length > 0) {
        const indexPath = path.join(dirPath, "index.ts");
        fs.writeFileSync(indexPath, exports.join("\n") + "\n", "utf-8");
        console.log(`  📌 Generated: ${indexPath}\n`);
    } else {
        console.warn(`  ⚠️ No exports found in ${dirPath}, skipping.\n`);
    }
};

// Function to generate exports for specific directories
const generateExports = (dirNames?: string[]): void => {
    console.log("\n🚀 Starting export generation...\n");

    const directoriesToProcess = dirNames || WATCH_DIRS;

    directoriesToProcess.forEach((dirName: string) => {
        const dirPath = path.join(SRC_DIR, dirName);
        if (fs.existsSync(dirPath)) {
            console.log(`\n📦 Processing ${dirName} directory...`);
            createIndexFile(dirPath);
        } else {
            console.warn(`⚠️ Directory not found: ${dirPath}`);
        }
    });

    console.log("\n🎉 Export generation completed!\n");
};

// Function to watch directories for changes
const watchDirectories = (dirNames?: string[]): void => {
    console.log("\n👀 Starting file watcher...\n");

    const directoriesToWatch = dirNames || WATCH_DIRS;

    // Use more explicit patterns for all supported extensions
    const watchPatterns: string[] = [];
    directoriesToWatch.forEach((dir) => {
        const dirPath = path.join(SRC_DIR, dir);
        SUPPORTED_EXTENSIONS.forEach((ext) => {
            watchPatterns.push(path.join(dirPath, `**/*${ext}`));
        });
    });

    console.log(`🔍 Watch patterns: ${watchPatterns.join(", ")}`);

    // Configure the watcher with enhanced options for better detection
    const watcher = chokidar.watch(watchPatterns, {
        ignored: [
            /(^|[\/\\])\../, // ignore dotfiles
            /(^|[\/\\])node_modules[\/\\]/, // ignore node_modules
            /index\.(ts|tsx|js|jsx)$/, // ignore index files
        ],
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: {
            stabilityThreshold: 500,
            pollInterval: 100,
        },
        usePolling: true, // Use polling for better cross-platform support
        interval: 1000, // Poll every 1 second
        alwaysStat: true, // Always call stat on files
    });

    // Add event listeners with more detailed logging
    watcher
        .on("add", (filePath) => {
            console.log(`\n📝 File added: ${filePath}`);

            if (IGNORED_FILES.some((file) => filePath.endsWith(file))) {
                console.log(`  ⚠️ Ignored index file: ${filePath}`);
                return;
            }

            // Get the directory of the file
            const dirPath = path.dirname(filePath);
            console.log(`  🔍 Processing directory: ${dirPath}`);

            // Generate exports for the directory
            createIndexFile(dirPath);
        })
        .on("change", (filePath) => {
            console.log(`\n📝 File changed: ${filePath}`);

            if (IGNORED_FILES.some((file) => filePath.endsWith(file))) {
                console.log(`  ⚠️ Ignored index file: ${filePath}`);
                return;
            }

            // Get the directory of the file
            const dirPath = path.dirname(filePath);
            console.log(`  🔍 Processing directory: ${dirPath}`);

            // Generate exports for the directory
            createIndexFile(dirPath);
        })
        .on("unlink", (filePath) => {
            console.log(`\n🗑️ File removed: ${filePath}`);

            if (IGNORED_FILES.some((file) => filePath.endsWith(file))) {
                console.log(`  ⚠️ Ignored index file: ${filePath}`);
                return;
            }

            // Get the directory of the file
            const dirPath = path.dirname(filePath);
            console.log(`  🔍 Processing directory: ${dirPath}`);

            // Generate exports for the directory
            createIndexFile(dirPath);
        })
        .on("error", (error) => {
            console.error(`\n❌ Watcher error: ${error}`);
        })
        .on("ready", () => {
            console.log("\n✅ Watcher is ready and monitoring for changes...");
            console.log("\n🔍 Watching for file changes... (Press Ctrl+C to stop)\n");
        });
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
        watchDirectories(dirNames.length > 0 ? dirNames : undefined);
    } else {
        // Just generate exports
        generateExports(dirNames.length > 0 ? dirNames : undefined);
    }
}

export { generateExports, watchDirectories };
