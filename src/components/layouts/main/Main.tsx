"use client"

import React from "react";

import { SideBar } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

interface MainProps {
    children: React.ReactNode;
}

const Main : React.FC<MainProps> = ({ children }) => {
    
    return (
        <div className={"max-w-[calc(100%-82px)] w-full ml-20 relative"}>
            <SideBar list={PERSONAL_IDENTIFIABLE_INFORMATION.socialProfiles}/>
            { children }
        </div>
    );
};

export default Main;