"use client"

import React, { useState } from "react";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { PortfolioItem, PortfolioPreview } from "@/components";

const PortfolioList: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);
    
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;

    return (
        <div className="overflow-hidden">
            <div className="mx-[calc(-0.5*1.5rem)] flex flex-wrap justify-between">
                <div className="max-w-full w-[42%] px-[calc(0.5*1.5rem)] flex-none-auto">
                    <ul style={{ scrollbarWidth: "none" }} className="h-[95vh] pb-12.5 overflow-y-scroll">
                        { info.portfolios.map((item, index) => (
                            <PortfolioItem key={index} item={item} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}/>
                        )) }
                    </ul>
                </div>
                <div className="max-w-full w-[50%] px-[calc(0.5*1.5rem)] flex-none-auto">
                    <div className="mr-[10%] py-12.5">
                        <PortfolioPreview portfolios={info.portfolios} hoveredIndex={hoveredIndex} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioList;