"use client"

import React from "react";

import { SideBar } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className={"main-container"}>
            <SideBar list={PERSONAL_IDENTIFIABLE_INFORMATION.socialProfiles}/>
            { children }
        </div>
    );
};

export default Main;