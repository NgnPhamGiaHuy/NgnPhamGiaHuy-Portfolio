import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const constantsDir = path.resolve(__dirname, "../constants");

console.log("\n🚀 Starting constants export generation...\n");

// Function to check if a file contains export default or named exports
const getExportStatement = (filePath: string, relativePath: string): string => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    if (fileContent.includes("export default")) {
        const constantName = path.basename(filePath, path.extname(filePath))
            .replace(/([a-z])([A-Z])/g, "$1_$2") // Add underscore between words
            .toUpperCase();
        console.log(`  ✅ Default export found: ${relativePath} -> ${constantName}`);
        return `export { default as ${constantName} } from "${relativePath}";`;
    }
    console.log(`  ✅ Named exports found in: ${relativePath}`);
    return `export * from "${relativePath}";`;
};

// Function to scan directories and collect exports
const scanDirectory = (dirPath: string, level: number, basePath: string = dirPath): string[] => {
    const files = fs.readdirSync(dirPath);
    let currentExports: string[] = [];
    let hasExportableFiles = false;

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const fileStat = fs.statSync(filePath);
        const relativePath = path.relative(basePath, filePath).replace(/\\/g, "/").replace(/\.(ts|tsx)$/, "");

        if (fileStat.isDirectory()) {
            const subExports = scanDirectory(filePath, level + 1, basePath);
            if (subExports.length > 0) {
                currentExports.push(...subExports);
                hasExportableFiles = true;
            }
        } else if (fileStat.isFile() && (file.endsWith(".ts") || file.endsWith(".tsx")) && file !== "index.ts") {
            currentExports.push(getExportStatement(filePath, `./${relativePath}`));
            hasExportableFiles = true;
        }
    });

    return level === 1 && !hasExportableFiles ? [] : currentExports;
};

// Generate index.ts for level 0 (constants/)
const rootExports = fs.readdirSync(constantsDir)
    .filter((subDir) => fs.statSync(path.join(constantsDir, subDir)).isDirectory())
    .map((subDir) => `export * from "./${subDir}";`);

if (rootExports.length > 0) {
    fs.writeFileSync(path.join(constantsDir, "index.ts"), rootExports.join("\n") + "\n", "utf-8");
    console.log(`✅ Generated index.ts for: ${constantsDir}\n`);
}

// Generate index.ts for level 1 subfolders only
fs.readdirSync(constantsDir).forEach((subDir) => {
    const subDirPath = path.join(constantsDir, subDir);
    if (fs.statSync(subDirPath).isDirectory()) {
        const exports = scanDirectory(subDirPath, 1);
        if (exports.length > 0) {
            fs.writeFileSync(path.join(subDirPath, "index.ts"), exports.join("\n") + "\n", "utf-8");
            console.log(`✅ Generated index.ts for: ${subDirPath}\n`);
        }
    }
});

console.log("🎉 Constants export generation completed!\n");