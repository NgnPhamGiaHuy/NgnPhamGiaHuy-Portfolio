import clsx from "clsx";
import React from "react";

interface BannerProps {
    padding?: string;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "between" | "end";
}

const Banner: React.FC<React.PropsWithChildren<BannerProps>> = React.memo(({ children, padding, align = "center", justify = "start" }) => {
    return (
        <div className="h-full">
            <div className="sticky top-0">
                <div className={clsx("h-screen", padding, `items-${align}`, `justify-${justify}`, "flex flex-col bg-[#FBDACF]")}>
                    { children }
                </div>
            </div>
        </div>
    );
});

export default Banner;