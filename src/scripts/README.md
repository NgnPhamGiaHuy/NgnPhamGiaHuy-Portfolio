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
- 📂 Generates index files for nested directories
- 👀 Auto-watches for file changes
- 🎨 Supports selective directory processing

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
