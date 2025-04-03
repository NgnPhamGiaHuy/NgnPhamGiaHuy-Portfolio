"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, SlugPortfolio } from "@/components";

const PortfolioDetailPage: React.FC = () => {
    const pathname: string = usePathname();

    return (
        <AppLayout activeLink={pathname}>
            <SlugPortfolio/>
        </AppLayout>
    );
};

export default PortfolioDetailPage;