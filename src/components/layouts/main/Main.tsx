"use client"

import React from "react";

import { SideBar } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className={"max-xl:max-w-full max-w-[calc(100%-82px)] w-full max-xl:ml-0 ml-20 relative"}>
            <SideBar list={PERSONAL_IDENTIFIABLE_INFORMATION.socialProfiles}/>
            { children }
        </div>
    );
};

export default Main;