# NgnPhamGiaHuy Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-38B2AC?logo=tailwind-css&logoColor=white)

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. This portfolio showcases professional experience, skills, projects, and certifications in an elegant and interactive way.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNgnPhamGiaHuy%2FNgnPhamGiaHuy-Portfolio)

</div>

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and TailwindCSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built-in SEO optimization with next-seo
- **Contact Form**: Integrated contact form with reCAPTCHA protection
- **Database Integration**: SQLite database for storing portfolio data
- **Component Library**: Reusable UI components with Headless UI
- **Icon Integration**: Font Awesome and React Icons for beautiful icons
- **Form Handling**: Advanced form management with React Hook Form and Zod validation
- **Analytics**: Built-in analytics with Vercel Analytics
- **Performance**: Optimized for speed with Turbopack

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
  <img src="https://api.iconify.design/logos:nextjs-icon.svg" width="48" height="48" alt="Next.js" />
</td>
<td align="center" width="96">
  <img src="https://api.iconify.design/logos:typescript-icon.svg" width="48" height="48" alt="TypeScript" />
</td>
<td align="center" width="96">
  <img src="https://api.iconify.design/logos:tailwindcss-icon.svg" width="48" height="48" alt="TailwindCSS" />
</td>
<td align="center" width="96">
  <img src="https://api.iconify.design/logos:sqlite.svg" width="48" height="48" alt="SQLite" />
</td>
</tr>
</table>

### Core Technologies

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: SQLite (better-sqlite3)

### Additional Libraries

- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Form Management**: React Hook Form + Zod
- **Icons**: Font Awesome, React Icons
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics
- **Security**: Google reCAPTCHA

## 📦 Installation

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/NgnPhamGiaHuy/NgnPhamGiaHuy-Portfolio.git
cd NgnPhamGiaHuy-Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

```env
# Google reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

4. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Available Scripts

| Command                     | Description                             |
| --------------------------- | --------------------------------------- |
| `npm run dev`               | Start development server with Turbopack |
| `npm run build`             | Build the application                   |
| `npm run start`             | Start the production server             |
| `npm run lint`              | Run ESLint                              |
| `npm run export-components` | Generate component exports              |
| `npm run export-types`      | Generate type exports                   |
| `npm run export-constants`  | Generate constant exports               |
| `npm run export-all`        | Run all export scripts                  |

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── actions/        # Server actions
│   ├── api/           # API routes
│   └── (routes)/      # Page routes
├── components/         # Reusable UI components
├── constants/         # Application constants
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries and database
├── public/           # Static assets
├── scripts/          # Build and utility scripts
├── styles/           # Global styles
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## 🔒 Security

This project implements several security measures:

- Google reCAPTCHA integration for form submissions
- SQLite database with prepared statements
- TypeScript for type safety
- Environment variables for sensitive data

## 🌐 Deployment

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## 👤 Author

<div align="center">

**NgnPhamGiaHuy**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NgnPhamGiaHuy)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nguyenphamgiahuy)

</div>

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- All contributors and maintainers of the used libraries
- The open-source community
- Vercel for hosting and analytics

---

<div align="center">

Made with ❤️ by NgnPhamGiaHuy

</div>
