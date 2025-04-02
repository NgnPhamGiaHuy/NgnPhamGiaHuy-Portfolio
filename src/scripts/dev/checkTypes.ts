import { execSync } from "child_process";
import chalk from "chalk";

console.log(chalk.blue("🔍 Starting TypeScript type checking...\n"));

try {
    // Run TypeScript compiler in noEmit mode
    execSync("tsc --noEmit", { stdio: "inherit" });

    console.log(chalk.green("\n✅ Type checking completed successfully!"));
} catch (error) {
    console.error(chalk.red("\n❌ Type checking failed:"));
    process.exit(1);
}
