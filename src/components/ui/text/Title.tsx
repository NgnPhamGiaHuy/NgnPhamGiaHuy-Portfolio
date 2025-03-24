import React from "react";

interface TitleProps {
    children: React.ReactNode;
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
    xl: "text-large",
};

const Title: React.FC<TitleProps> = ({ children, size = "xl", align = "left", color = "text-title", margin = "auto", className = "" }) => {
    const baseStyle = `${sizeMap[size]} text-${align} ${color} mx-${margin} ${className}`;

    return <h1 className={baseStyle}>{children}</h1>;
};

export default Title;