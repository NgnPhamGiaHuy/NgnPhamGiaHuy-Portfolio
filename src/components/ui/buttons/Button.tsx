import clsx from "clsx";
import React from "react";

import { TypographyProps } from "@/types";
import { BUTTON_SIZE_MAP } from "@/constants";

type ButtonColor = "primary" | "secondary";

interface ButtonProps extends Omit<TypographyProps, "color"> {
    color?: ButtonColor;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = React.memo(({ color = "primary", size = "md", className = "", disabled = false, onClick, children, }) => {
    const colorMap: Record<ButtonColor, string> = {
        primary: "border-title text-title hover:border-primary-1 hover:text-primary-1 after:bg-title",
        secondary: "border-primary-1 text-primary-1 hover:border-title hover:text-title after:bg-primary-1",
    };
    
    return (
        <button onClick={onClick} className={clsx(colorMap[color], className, disabled, "cursor-pointer relative")}>
            <div className={`${BUTTON_SIZE_MAP[size]} border border-t-5 border-r-5 border-solid transition-all duration-300`}>
                <span className="font-semibold whitespace-nowrap leading-none">
                    { children }
                </span>
            </div>
        </button>
    );
});

Button.displayName = "Button";

export default Button;
