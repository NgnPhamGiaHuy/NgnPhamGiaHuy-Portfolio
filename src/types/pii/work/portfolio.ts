import React from "react";

export interface PortfolioProps {
    title: string;
    category: string;
    icon: (index: number, hoveredIndex: number) => React.ReactNode;
}