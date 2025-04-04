"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, SlugPortfolio } from "@/components";

const PortfolioDetailPage: React.FC = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const lastSlug = segments[segments.length - 1];
    
    return (
        <AppLayout activeLink={pathname}>
            <SlugPortfolio pathname={lastSlug}/>
        </AppLayout>
    );
};

export default PortfolioDetailPage;