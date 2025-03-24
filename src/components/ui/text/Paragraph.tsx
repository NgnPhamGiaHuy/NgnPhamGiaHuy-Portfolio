import React from "react";

interface ParagraphProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    color?: string;
    align?: "left" | "center" | "right" | "justify";
    margin?: string | "auto";
    className?: string;
}

const sizeMap = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
};

const Paragraph: React.FC<ParagraphProps> = ({ children, size = "md", color = "text-text", align = "justify", margin = "auto", className = "" }) => (
    <p className={`font-normal font-(family-name:--font-montserrat) leading-[1.7] mx-${margin} ${sizeMap[size]} ${color} text-${align} ${className}`}>
        {children}
    </p>
);

export default Paragraph;