"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, Home, Portfolio } from "@/components";


const PortfolioPage : React.FC = () => {
    const pathname = usePathname();

    return (
        <AppLayout activeLink={pathname}>
            <Portfolio />
        </AppLayout>
    );
};

export default PortfolioPage;