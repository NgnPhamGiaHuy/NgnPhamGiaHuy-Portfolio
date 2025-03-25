import type { Metadata } from "next";
import { Unbounded, Montserrat } from "next/font/google";

import "../lib/fontawesome"
import "../styles/globals.css";

/**
     * Font configuration for Unbounded font family
     * @constant {Font} unbounded - Unbounded font with Latin subset
 */
const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded' });

/**
     * Font configuration for Montserrat font family
     * @constant {Font} montserrat - Montserrat font with Latin subset
 */
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

/**
     * Metadata configuration for the application
     * @constant {Metadata}
 */
export const metadata: Metadata = {
    title: "NgnPhamGiaHuy",
    description: "Implemented by NgnPhamGiaHuy",
};

/**
     * Root layout component that wraps the entire application
     * @component
     * @param {Object} props - Component properties
     * @param {React.ReactNode} props.children - Child components to be rendered within the layout
     * @returns {JSX.Element} The root layout structure with configured fonts and children
 */
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={`${unbounded.variable} ${montserrat.variable} antialiased`}>
                { children }
            </body>
        </html>
    );
}
