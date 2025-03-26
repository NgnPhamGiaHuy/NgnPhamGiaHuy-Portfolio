import React from "react";

export interface TypographyProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "custom";
    align?: "left" | "center" | "right" | "justify";
    fontWeight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
    color?: string;
    className?: string;
}