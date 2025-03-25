"use client"

import React from "react";

import { PortfolioList } from "@/components";

const Portfolio : React.FC = () => {
    return (
        <div className={"overflow-hidden"}>
            <PortfolioList/>
        </div>
    );
};

export default Portfolio;