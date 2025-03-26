import React from "react";

interface SectionTitleProps {
    text: string;
    icon?: React.ReactNode;
    color?: string;
    gap?: string;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, icon, color = "text-primary-1", gap = "gap-2", className = "" }) => {
    return (
        <span className={`mb-1 flex items-center ${gap} text-base ${color} font-normal leading-none ${className}`}>
            { icon && icon }
            { text }
        </span>
    );
};

export default SectionTitle;