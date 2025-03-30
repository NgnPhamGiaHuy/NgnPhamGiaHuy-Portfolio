"use client"

import React, { useCallback, useState } from "react";

import { Header, Main, SideBarMenu } from "@/components";

const AppLayout: React.FC<React.PropsWithChildren<{ activeLink: string }>> = ({ children, activeLink }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);

    return (
        <>
            <SideBarMenu activeLink={activeLink} isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <Header activeLink={activeLink} onClose={toggleSidebar} />
            <Main>{children}</Main>
        </>
    );
};

export default AppLayout;