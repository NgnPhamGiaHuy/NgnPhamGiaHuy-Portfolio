"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, FAQ } from "@/components";

const FAQPage : React.FC= () => {
    const pathname : string = usePathname();
    
    return (
        <AppLayout activeLink={pathname}>
            <FAQ />
        </AppLayout>
    );
};

export default FAQPage;