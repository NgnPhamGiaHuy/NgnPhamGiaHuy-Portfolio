import clsx from "clsx"
import React, { useCallback } from "react";

import { Button } from "@/components";
import { TypographyProps } from "@/types";
import { handleDownloadCV } from "@/utils";

type ButtonColor = "primary" | "secondary";

interface LinkButtonProps extends Omit<TypographyProps, "color"> {
    fileName: string;
    color?: ButtonColor;
}

const DownloadCVButton: React.FC<LinkButtonProps> = ({ fileName, color = "primary", size = "md", className = "", children }) => {
    const handleClick = useCallback(() => handleDownloadCV({ fileName }), [fileName]);

    return (
        <Button color={color} size={size} className={clsx(className, "download-cv-button-after hover:after:bg-primary-1")} onClick={handleClick}>
            { children }
        </Button>
    );
};

export default DownloadCVButton;