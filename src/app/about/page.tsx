"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { About, AppLayout } from "@/components";

const AboutPage: React.FC = () => {
    const pathname: string = usePathname();

    return (
        <AppLayout activeLink={pathname}>
            <About />
        </AppLayout>
    );
};

export default AboutPage;