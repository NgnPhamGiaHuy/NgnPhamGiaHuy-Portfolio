import clsx from "clsx";
import React from "react";

import { TITLE_SIZE_MAP } from "@/constants";
import { TypographyProps } from "@/types";

interface HeadingProps extends TypographyProps {
    as?: keyof React.JSX.IntrinsicElements;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = React.memo(({ children, level = 1, size = "xl", align = "left", color = "text-title", fontWeight = "bold", className = "", }) => {
    const Tag = (`h${level}` as keyof React.JSX.IntrinsicElements) || "h1";

    return (
        <Tag className={clsx(`text-${align}`, `font-${fontWeight}`, color, size === "custom" ? className : TITLE_SIZE_MAP[size], className)}>
            { children }
        </Tag>
    );
});

export default Heading;