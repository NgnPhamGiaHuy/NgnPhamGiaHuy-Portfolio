import { execSync } from "child_process";
import chalk from "chalk";
import fs from "fs";
import path from "path";

console.log(chalk.blue("🔍 Starting dependency checks...\n"));

try {
  // Check for outdated dependencies
  console.log(chalk.yellow("Checking for outdated dependencies..."));
  execSync("npm outdated", { stdio: "inherit" });

  // Run depcheck to find unused dependencies
  console.log(chalk.yellow("\nChecking for unused dependencies..."));
  execSync("depcheck", { stdio: "inherit" });

  // Check for known vulnerabilities
  console.log(chalk.yellow("\nChecking for security vulnerabilities..."));
  execSync("npm audit", { stdio: "inherit" });

  // Check for duplicate dependencies
  console.log(chalk.yellow("\nChecking for duplicate dependencies..."));
  execSync("npm dedupe --dry-run", { stdio: "inherit" });

  console.log(chalk.green("\n✅ Dependency checks completed!"));
} catch (error) {
  console.error(chalk.red("\n❌ Dependency checks failed:"));
  process.exit(1);
}

module.exports = {};
