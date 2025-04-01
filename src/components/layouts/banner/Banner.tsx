import clsx from "clsx";
import React from "react";

interface BannerProps {
    width?: string;
    className?: string;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "between" | "end";
}

const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({ children, align = "center", justify = "start", width = "w-2/5", className }) => {
    return (
        <div className={clsx(width, "max-w-full max-lg:w-full relative")}>
            <div className={"h-full"}>
                <div className={"sticky top-0"}>
                    <div className={clsx(`items-${align}`, `justify-${justify}`, className, "max-lg:h-[unset] h-screen banner-margin-responsive banner-padding-responsive flex flex-col max-lg:justify-center bg-[#FBDACF]")}>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;