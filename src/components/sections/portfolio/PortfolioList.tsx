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
        <ul style={{ scrollbarWidth: "none" }} className={"h-[95vh] pb-12 overflow-y-scroll"}>
            { portfolios.map((item: PortfolioProps, index: number) => (
                <PortfolioItem key={index} item={item} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}/>
            )) }
        </ul>
    );
});

export default PortfolioList;