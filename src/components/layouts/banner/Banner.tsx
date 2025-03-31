import clsx from "clsx";
import React from "react";

interface BannerProps {
    margin?: string;
    padding?: string;
    className?: string;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "between" | "end";
}

const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({ children, margin, padding, align = "center", justify = "start", className }) => {
    return (
        <div className={"h-full"}>
            <div className={"sticky top-0"}>
                <div className={clsx("max-lg:h-[unset] h-screen", margin, padding, `items-${align}`, `justify-${justify}`, className, "flex flex-col max-lg:justify-center bg-[#FBDACF]")}>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Banner;