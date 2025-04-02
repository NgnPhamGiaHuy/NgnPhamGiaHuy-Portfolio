"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, Faq } from "@/components";

const FAQPage: React.FC = () => {
    const pathname: string = usePathname();

    return (
        <AppLayout activeLink={pathname}>
            <Faq />
        </AppLayout>
    );
};

export default FAQPage;