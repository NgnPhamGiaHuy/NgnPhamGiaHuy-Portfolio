import React from "react";

interface BannerProps {
    children: React.ReactNode;
    padding?: string;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "between" | "end";
}

const Banner : React.FC<BannerProps> = ({ children, padding, align = "center", justify = "start" }) => {
    return (
        <div className={"h-full"}>
            <div className={"top-0 sticky"}>
                <div className={`h-screen ${padding} top-0 flex flex-col items-${align} justify-${justify} bg-[#FBDACF] sticky`}>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default Banner;