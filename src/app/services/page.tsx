"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, Service } from "@/components";

const ServicesPage : React.FC = () => {
    const pathname : string = usePathname();
    
    return (
        <AppLayout activeLink={pathname}>
            <Service />
        </AppLayout>
    );
};

export default ServicesPage;