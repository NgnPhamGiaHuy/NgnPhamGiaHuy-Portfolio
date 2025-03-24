"use client"

import React from "react";

import { AboutBanner, AboutContent } from "@/components";

const About : React.FC = () => {
    return (
        <div>
            <div className={"max-w-full w-full flex flex-row relative"}>
                <div className={"max-w-full w-[40%] relative"}>
                    <AboutBanner />
                </div>
                <div className={"max-w-full w-[60%] h-full pt-31.25 pr-30 pb-27.5 pl-17.5 flex flex-col grow-0 shrink basis-auto relative"}>
                    <AboutContent />
                </div>
            </div>
        </div>
    );
};

export default About;