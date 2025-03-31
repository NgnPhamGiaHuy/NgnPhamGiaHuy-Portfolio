import clsx from "clsx";
import React from "react";

interface BannerProps {
    padding?: string;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "between" | "end";
}

const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({ children, padding, align = "center", justify = "start" }) => {
    return (
        <div className={"h-full"}>
            <div className={"sticky max-sm:px-3 max-md:px-6 max-lg:px-9 top-0"}>
                <div className={clsx("max-lg:h-[unset] h-screen", padding, `items-${align}`, `justify-${justify}`, "flex flex-col max-lg:justify-center bg-[#FBDACF]")}>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Banner;