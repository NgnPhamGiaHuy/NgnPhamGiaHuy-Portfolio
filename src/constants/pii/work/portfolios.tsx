import React from "react";
import { FaCodepen } from "react-icons/fa6";

import { PortfolioProps } from "@/types";

export const PII_PORTFOLIOS: PortfolioProps[] = [
    {
        title: "NFT Portfolio",
        category: "Product Design",
        icon: (index: number, hoveredIndex:number) => (
            <FaCodepen
                className={"w-5 h-5"}
                style={{ color: hoveredIndex === index ? 'white' : 'var(--color-primary-1)' }}
            />
        ),
    },
    {
        title: "NFT Portfolio",
        category: "Product Design",
        icon: (index: number, hoveredIndex:number) => (
            <FaCodepen
                className={"w-5 h-5"}
                style={{ color: hoveredIndex === index ? 'white' : 'var(--color-primary-1)' }}
            />
        ),
    },
    {
        title: "NFT Portfolio",
        category: "Product Design",
        icon: (index: number, hoveredIndex:number) => (
            <FaCodepen
                className={"w-5 h-5"}
                style={{ color: hoveredIndex === index ? 'white' : 'var(--color-primary-1)' }}
            />
        ),
    },
]