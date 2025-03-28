import clsx from "clsx";
import React from "react";

import { TypographyProps } from "@/types";
import { PARAGRAPH_SIZE_MAP } from "@/constants";

const Paragraph: React.FC<TypographyProps> = React.memo(({ children, size = "md", color = "text-text", align = "justify", fontWeight = "normal", className = "" }) => {
    return(
        <p className={clsx("font-(family-name:--font-montserrat)", `text-${align}`, `font-${fontWeight}`, size === "custom" ? className : PARAGRAPH_SIZE_MAP[size], color, className)}>
            { children }
        </p>
    )
});

export default Paragraph;