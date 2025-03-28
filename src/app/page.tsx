"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, Home } from "@/components";

const HomePage : React.FC = React.memo(() => {
    const pathname : string= usePathname();

    return (
        <AppLayout activeLink={pathname}>
            <Home />
        </AppLayout>
    );
});

export default HomePage;