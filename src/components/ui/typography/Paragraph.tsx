import React from "react";

import { TypographyProps } from "@/types";
import { PARAGRAPH_SIZE_MAP } from "@/constants";

const Paragraph: React.FC<TypographyProps> = ({ children, size = "md", color = "text-text", align = "justify", fontWeight = "normal", className = "" }) => {
    const customFontSize =
        size === "custom"
            ? `${className}`
            : `${PARAGRAPH_SIZE_MAP[size]}`;

    const baseStyle = `text-${align} font-(family-name:--font-montserrat) font-${fontWeight} ${customFontSize} ${color} ${className}`;

    return(
        <p className={baseStyle}>
            { children }
        </p>
    )
};

export default Paragraph;