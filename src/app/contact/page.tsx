"use client"

import React from "react";
import { usePathname } from "next/navigation";

import { AppLayout, Contact } from "@/components";

const ContactPage : React.FC = () => {
    const pathname : string = usePathname();
    
    return (
        <AppLayout activeLink={pathname}>
            <Contact />
        </AppLayout>
    );
};

export default ContactPage;