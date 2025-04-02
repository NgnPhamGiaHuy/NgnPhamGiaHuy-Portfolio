# 🛠️ Scripts Documentation

> This directory contains various utility scripts for development, building, and maintaining the Next.js application. Each script is designed to handle specific aspects of the development workflow.

---

## 📁 Directory Structure

```bash
scripts/
├── build/          # Build-related scripts
├── ci/             # Continuous Integration scripts
├── dev/            # Development utility scripts
└── exports/        # Export generation scripts
```

---

## 📚 Available Scripts

### 🔄 Export Generation (`exports/`)

The export generation system automatically manages module exports throughout the project.

<details>
<summary><strong>Main Commands</strong></summary>

| Command                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `npm run export-all`   | Generate exports for all directories                          |
| `npm run export-watch` | Watch mode - automatically regenerate exports on file changes |
| `npm run export-{dir}` | Generate exports for specific directory                       |

</details>

<details>
<summary><strong>Features</strong></summary>

- ✨ Supports both default and named exports
- 📝 Handles various file types (ts, tsx, js, jsx)
- 🎯 Maintains proper export names from constants
- 📂 Generates a single index.ts file for each main directory (components, types, etc.)
- 📊 Recursively collects exports from all subdirectories
- 👀 Auto-watches for file changes in all nested folders
- 🎨 Supports selective directory processing
- 📝 Includes summary mode for cleaner logging output

</details>

<details>
<summary><strong>Behavior</strong></summary>

- Creates a single `index.ts` file in each main directory (components, utils, hooks, etc.)
- Collects all exports from all subdirectories recursively
- Does not create individual index.ts files in subdirectories
- File exports follow the structure: `export { default as ComponentName } from "./subdirectory/ComponentName";`
- When running in watch mode with `--summary` flag, provides concise logging
- Automatically detects new files, changes, and deletions

</details>

### 🔧 Development Tools (`dev/`)

#### Type Checking (`checkTypes.ts`)

> Run with: `npm run type-check`

<details>
<summary><strong>Features</strong></summary>

- 🔍 Runs TypeScript compiler in noEmit mode
- 📊 Checks type coverage across the project
- 🚨 Provides clear error reporting
- 🛡️ Ensures type safety across the codebase

</details>

### 📦 Build Tools (`build/`)

#### Bundle Analysis (`analyze.ts`)

> Run with: `npm run analyze`

<details>
<summary><strong>Features</strong></summary>

- 📊 Generates detailed bundle analysis
- 📈 Creates visual reports for client and server bundles
- 🔍 Helps identify bundle size issues
- 💾 Output saved in `.next/analyze/`

</details>

### ⚙️ CI Tools (`ci/`)

#### Dependency Check (`checkDependencies.ts`)

> Run with: `npm run check-deps`

<details>
<summary><strong>Features</strong></summary>

- 🔄 Checks for outdated dependencies
- 🧹 Identifies unused dependencies
- 🔒 Scans for security vulnerabilities
- 🎯 Detects duplicate dependencies

</details>

---

## 🔄 Pre-commit and Build Hooks

The following checks run automatically:

<details>
<summary><strong>Development (`npm run dev`)</strong></summary>

- 🔄 Generates all exports (`export-all`)

</details>

<details>
<summary><strong>Build (`npm run build`)</strong></summary>

- 🔄 Generates all exports (`export-all`)

</details>

<details>
<summary><strong>Validation (`npm run validate`)</strong></summary>

- ✅ Type checking
- 🔍 Linting
- 📦 Dependency checks

</details>

---

## 💡 Best Practices

### 🔄 Export Generation

- 👀 Run `export-watch` during development for automatic export updates
- 🎯 Use specific export commands when working on particular sections
- ✅ Always run `export-all` before commits
- 📊 Use `--summary` flag for cleaner output during watch mode
- 📂 Remember that only main directories will contain index.ts files

### 🛡️ Type Safety

- 🔍 Run `type-check` before committing changes
- ❌ Fix all type errors before pushing
- 📊 Maintain high type coverage

### 📦 Bundle Optimization

- 📈 Run `analyze` periodically to monitor bundle sizes
- 👀 Review client and server bundles
- ⚡ Optimize large dependencies

### 📦 Dependency Management

- 🔄 Run `check-deps` monthly
- 🆙 Update dependencies regularly
- 🧹 Remove unused dependencies
- 🔒 Address security vulnerabilities promptly

---

## ❗ Common Issues and Solutions

### 🔄 Export Generation Issues

```bash
# If exports are missing
npm run export-all

# For specific directory issues
npm run export-{dir}

# Check file naming conventions if exports aren't detected
```

#### Troubleshooting Export Generation

- 🔍 Make sure your components have proper exports (default or named)
- 📂 Remember that index.ts files are only created in main directories
- 🔄 If you see no logs during file changes, ensure the file is in a watched directory
- 📝 For verbose logs, remove the `--summary` flag from the export-watch script

### ⚠️ Type Checking Failures

- 🔍 Review error messages in the console
- 📚 Check for missing type definitions
- 🔗 Verify import paths
- ✍️ Ensure proper type annotations

### 📦 Bundle Size Issues

- 📊 Use `analyze` to identify large dependencies
- 🔄 Consider code splitting
- 🔍 Review and optimize imports
- ⚡ Use dynamic imports where appropriate

## 🔮 Future Improvements

| Category        | Description                              |
| --------------- | ---------------------------------------- |
| 📊 Testing      | Add test coverage reporting              |
| 🔄 Dependencies | Implement automated dependency updates   |
| ⚡ Performance  | Add performance benchmarking             |
| 📦 Bundle       | Enhance bundle analysis with size limits |
| 🔍 Quality      | Add automated code quality checks        |

---

<div align="center">

**Made with ❤️ for better development workflow**

</div>
