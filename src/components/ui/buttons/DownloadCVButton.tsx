import React from "react";

import { handleDownloadCV } from "@/utils";

interface LinkButtonProps {
    fileName: string;
    color?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    className?: string;
    children: React.ReactNode;
}

const sizeMap = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-5 text-sm",
    lg: "py-4 px-6 text-base",
};

const colorMap = {
    primary: "border-primary-2 text-primary-2 hover:border-primary-1 hover:text-primary-1 after:bg-primary-2",
    secondary: "border-secondary-2 text-secondary-2 hover:border-secondary-1 hover:text-secondary-1 after:bg-secondary-2",
};

const DownloadCVButton: React.FC<LinkButtonProps> = ({ fileName, color = "primary", size = "md", className = "", children }) => {
    const handleClick = () => handleDownloadCV({ fileName });

    return (
        <button onClick={handleClick} className={`relative cursor-pointer after:w-7.5 after:h-[1px] after:top-1/2 after:-right-7.5 after:-translate-y-1/2 after:absolute after:transition-all after:duration-300 hover:after:bg-primary-1 ${colorMap[color]} ${className}`}>
            <div className={`border border-t-5 border-r-5 border-solid transition-all duration-300 ${sizeMap[size]}`}>
                <span className="font-semibold whitespace-nowrap leading-none">
                    { children }
                </span>
            </div>
        </button>
    );
};

export default DownloadCVButton;