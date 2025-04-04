import clsx from "clsx";
import React from 'react';
import { Heading } from "@/components";

const PortfolioWrapper : React.FC<React.PropsWithChildren<{ margin?: string, gap?: string, title?: string, flexDirection?: string, className?: string }>> = ({ margin = "mt-6", gap = "gap-6", flexDirection = "flex-column", title = "", className, children }) => {
    return (
        <div className={clsx(margin, gap, flexDirection, className, "flex flex-col grow-0 shrink basis-auto")}>
            { title && (
                <Heading level={2} size={"custom"} fontWeight={"semibold"} className={"mb-8 max-sm:text-[1.375rem] text-2xl leading-snug"}>
                    { title }
                </Heading>
            ) }
            { children }
        </div>
    );
};

export default PortfolioWrapper;