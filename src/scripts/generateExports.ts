import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, "../components");

console.log("\n🚀 Starting component export generation...\n");

// Function to recursively scan a folder and collect `.tsx` files
const collectComponentExports = (folderPath: string, basePath: string = folderPath): string[] => {
    let exports: string[] = [];

    fs.readdirSync(folderPath).forEach((file: string) => {
        const filePath: string = path.join(folderPath, file);
        const relativePath: string = path.relative(basePath, filePath).replace(/\.tsx$/, ""); // Remove .tsx
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            exports = exports.concat(collectComponentExports(filePath, basePath)); // Recursively scan subfolders
        } else if (fileStat.isFile() && file.endsWith(".tsx") && file !== "index.tsx" && file !== "index.ts") {
            const componentName: string = path.basename(file, ".tsx");
            exports.push(`export { default as ${componentName} } from "./${relativePath}";`);
            console.log(`  ✅ Found component: ${relativePath}`);
        }
    });

    return exports;
};

// Function to generate `index.ts` for each subfolder recursively
const createIndexFile = (folderPath: string): void => {
    console.log(`🔍 Processing folder: ${folderPath}`);

    const exports: string[] = collectComponentExports(folderPath);

    if (exports.length > 0) {
        const indexPath = path.join(folderPath, "index.ts");
        fs.writeFileSync(indexPath, exports.join("\n") + "\n", "utf-8");
        console.log(`  📌 Generated: ${indexPath}\n`);
    } else {
        console.warn(`  ⚠️ No components found in ${folderPath}, skipping.\n`);
    }
};

// Scan `components/` and generate `index.ts` for each subfolder
fs.readdirSync(componentsDir).forEach((subDir: string) => {
    const subDirPath: string = path.join(componentsDir, subDir);
    if (fs.statSync(subDirPath).isDirectory()) {
        createIndexFile(subDirPath);
    }
});

// Generate main `components/index.ts`
console.log("\n📌 Generating main components index file...\n");

const mainExports: string = fs
    .readdirSync(componentsDir)
    .filter((subDir: string) => fs.statSync(path.join(componentsDir, subDir)).isDirectory())
    .map((subDir: string) => `export * from "./${subDir}";`)
    .join("\n");

// const mainExports: string = fs
//     .readdirSync(componentsDir)
//     .filter((subDir: string) => fs.statSync(path.join(componentsDir, subDir)).isDirectory())
//     .map((subDir: string) => `export * as ${subDir.charAt(0).toUpperCase() + subDir.slice(1)} from "./${subDir}";`)
//     .join("\n");

const mainIndexPath = path.join(componentsDir, "index.ts");
fs.writeFileSync(mainIndexPath, mainExports + "\n", "utf-8");
console.log(`✅ Main components/index.ts generated successfully at ${mainIndexPath}.\n`);

console.log("🎉 Component export generation completed!\n");