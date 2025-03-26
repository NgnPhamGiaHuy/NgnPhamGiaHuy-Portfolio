"use client"

import React from "react";

import { PIIProps } from "@/types";
import { PortfolioItem} from "@/components";

interface PortfolioListProps {
    info: PIIProps,
    hoveredIndex: number,
    setHoveredIndex:  React.Dispatch<React.SetStateAction<number>>,
}

const PortfolioList: React.FC<PortfolioListProps> = ({ info, hoveredIndex, setHoveredIndex }) => {
    return (
        <ul style={{ scrollbarWidth: "none" }} className={"h-[95vh] pb-12 overflow-y-scroll"}>
            { info.portfolios.map((item, index) => (
                <PortfolioItem key={index} item={item} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}/>
            )) }
        </ul>
    );
};

export default PortfolioList;