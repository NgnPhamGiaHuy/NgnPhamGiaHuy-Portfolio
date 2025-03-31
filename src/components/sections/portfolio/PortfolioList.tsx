"use client"

import React from "react";

import { PortfolioProps } from "@/types";
import { PortfolioItem} from "@/components";

interface PortfolioListProps {
    portfolios: PortfolioProps[],
    hoveredIndex: number,
    setHoveredIndex:  React.Dispatch<React.SetStateAction<number>>,
}

const PortfolioList: React.FC<PortfolioListProps> = React.memo(({ portfolios, hoveredIndex, setHoveredIndex }) => {
    return (
        <ul style={{ scrollbarWidth: "none" }} className={"max-lg:h-[unset] h-[95vh] max-sm:pr-8 max-lg:pr-12 max-lg:pb-0 pb-12 overflow-y-scroll"}>
            { portfolios.map((item: PortfolioProps, index: number) => (
                <PortfolioItem key={index} item={item} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}/>
            )) }
        </ul>
    );
});

PortfolioList.displayName = "PortfolioList";

export default PortfolioList;