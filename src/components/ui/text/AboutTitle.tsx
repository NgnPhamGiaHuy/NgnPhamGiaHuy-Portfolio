import React from "react";

interface AboutTitleProps {
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    align?: "left" | "center" | "right" | "justify";
    color?: string;
    margin?: string | "auto";
    className?: string;
}

const sizeMap = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
}

const AboutTitle : React.FC<AboutTitleProps> = ({ children, size = "md", align = "left", color = "text-title", margin = "auto", className }) => {
    const baseStyle = `${sizeMap[size]} text-${align} ${color} mx-${margin} ${className} before:w-4/5 before:h-[2px] before:left-0 before:bottom-[2px] before:bg-primary-2 before:absolute inline-block relative`;
    
    return (
        <h2 className={baseStyle}>
            { children }
        </h2>
    );
};

export default AboutTitle;