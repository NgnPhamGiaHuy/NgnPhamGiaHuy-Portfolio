"use client"

import React from "react";

import { AboutBanner, AboutContent } from "@/components";

const About : React.FC = React.memo(() => {
    return (
        <div>
            <div className={"max-w-full w-full flex flex-row relative"}>
                <div className={"max-w-full w-2/5 relative"}>
                    <AboutBanner />
                </div>
                <div className={"max-w-full w-3/5 h-full pt-32 pr-28 pb-28 pl-16 flex flex-col grow-0 shrink basis-auto relative"}>
                    <AboutContent />
                </div>
            </div>
        </div>
    );
});

export default About;