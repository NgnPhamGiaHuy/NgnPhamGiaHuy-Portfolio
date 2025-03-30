"use client"

import React, { useState } from "react";

import { PortfolioList, PortfolioPreview } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const Portfolio: React.FC = () => {
    const { portfolios } = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);

    return (
        <div className={"overflow-hidden"}>
            <div className={"mx-[calc(-0.5*1.5rem)] flex flex-wrap justify-between"}>
                <div className={"max-w-full w-2/5 px-[calc(0.5*1.5rem)] flex-none-auto"}>
                    <PortfolioList portfolios={portfolios} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                </div>
                <div className={"max-w-full w-1/2 px-[calc(0.5*1.5rem)] flex-none-auto"}>
                    <PortfolioPreview portfolios={portfolios} hoveredIndex={hoveredIndex} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;