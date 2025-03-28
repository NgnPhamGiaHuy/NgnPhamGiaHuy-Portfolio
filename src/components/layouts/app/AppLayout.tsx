"use client"

import React from "react";

import { Header, Main } from "@/components";

interface AppLayoutProps {
    activeLink: string;
}

const AppLayout: React.FC<React.PropsWithChildren<AppLayoutProps>> = ({ children, activeLink }) => {
    return (
        <>
            <Header activeLink={activeLink} />
            <Main>{children}</Main>
        </>
    );
};

export default AppLayout;