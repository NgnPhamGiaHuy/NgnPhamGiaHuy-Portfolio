import React from "react";

interface TitleProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "custom";
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
    custom: "",
};

const Title: React.FC<TitleProps> = ({ children, size = "xl", align = "left", color = "text-title", margin = "auto", className = "" }) => {
    const baseStyle = size === "custom" ? `${className}` : `${sizeMap[size]} text-${align} ${color} mx-${margin} ${className}`;

    return <h1 className={baseStyle}>{children}</h1>;
};

export default Title;