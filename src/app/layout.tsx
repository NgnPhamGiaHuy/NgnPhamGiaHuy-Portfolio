import type { Metadata } from "next";
import { Unbounded, Montserrat } from "next/font/google";
import "../styles/globals.css";

const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
    title: "NgnPhamGiaHuy",
    description: "Implemented by NgnPhamGiaHuy",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={`${unbounded.variable} ${montserrat.variable} antialiased`}>
                { children }
            </body>
        </html>
    );
}
