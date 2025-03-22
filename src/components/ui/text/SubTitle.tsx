import React from "react";

interface SubTitleProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    align?: "left" | "center" | "right";
    color?: string;
    margin?: string | "auto";
    className?: string;
}

const sizeMap = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
};

const SubTitle: React.FC<SubTitleProps> = ({ children, size = "md", align = "left", color = "text-text", margin, className = "" }) => {
    const baseStyle = `${sizeMap[size]} text-${align} ${color} ${margin} font-medium leading-none ${className}`;

    return <h2 className={baseStyle}>{children}</h2>;
};

export default SubTitle;