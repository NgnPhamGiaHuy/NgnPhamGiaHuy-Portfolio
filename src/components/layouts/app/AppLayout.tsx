"use client"

import React from "react";

import { Header, Main } from "@/components";

interface AppLayoutProps {
    children: React.ReactNode;
    activeLink: string;
}

const AppLayout : React.FC<AppLayoutProps> = ({ children, activeLink }) => {
    return (
        <>
            <Header activeLink={activeLink}/>
            <Main>
                { children }
            </Main>
        </>
    );
};

export default AppLayout;