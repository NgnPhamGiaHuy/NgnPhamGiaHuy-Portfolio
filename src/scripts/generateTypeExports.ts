import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesDir = path.resolve(__dirname, "../types");

console.log("\n🚀 Starting type export generation...\n");

// Function to recursively scan a folder and collect `.ts` files
const collectTypeExports = (folderPath: string, basePath: string = folderPath): string[] => {
    let exports: string[] = [];

    fs.readdirSync(folderPath).forEach((file: string) => {
        const filePath: string = path.join(folderPath, file);
        const relativePath: string = path.relative(basePath, filePath).replace(/\.ts$/, ""); // Remove .ts
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            exports = exports.concat(collectTypeExports(filePath, basePath)); // Recursively scan subfolders
        } else if (fileStat.isFile() && file.endsWith(".ts") && file !== "index.ts") {
            const typeName: string = path.basename(file, ".ts");
            exports.push(`export * from "./${relativePath}";`);
            console.log(`  ✅ Found type: ${relativePath}`);
        }
    });

    return exports;
};

// Function to generate `index.ts` for each subfolder recursively
const createIndexFile = (folderPath: string): void => {
    console.log(`🔍 Processing folder: ${folderPath}`);

    const exports: string[] = collectTypeExports(folderPath);

    if (exports.length > 0) {
        const indexPath = path.join(folderPath, "index.ts");
        fs.writeFileSync(indexPath, exports.join("\n") + "\n", "utf-8");
        console.log(`  📌 Generated: ${indexPath}\n`);
    } else {
        console.warn(`  ⚠️ No types found in ${folderPath}, skipping.\n`);
    }
};

// Scan `types/` and generate `index.ts` for each subfolder
fs.readdirSync(typesDir).forEach((subDir: string) => {
    const subDirPath: string = path.join(typesDir, subDir);
    if (fs.statSync(subDirPath).isDirectory()) {
        createIndexFile(subDirPath);
    }
});

// Generate main `types/index.ts`
console.log("\n📌 Generating main types index file...\n");

const mainExports: string = fs
    .readdirSync(typesDir)
    .filter((subDir: string) => fs.statSync(path.join(typesDir, subDir)).isDirectory())
    .map((subDir: string) => `export * from "./${subDir}";`)
    .join("\n");

const mainIndexPath = path.join(typesDir, "index.ts");
fs.writeFileSync(mainIndexPath, mainExports + "\n", "utf-8");
console.log(`✅ Main types/index.ts generated successfully at ${mainIndexPath}.\n`);

console.log("🎉 Type export generation completed!\n");