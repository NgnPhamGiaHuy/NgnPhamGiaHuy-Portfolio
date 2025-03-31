"use client"

import clsx from "clsx"
import React from "react";

import { AboutBanner, AboutContent } from "@/components";

const About: React.FC = () => {
    const responsivePadding = "max-lg:pt-0 max-xl:pt-12 max-2xl:pt-20 pt-32 " +
        "max-sm:pr-3 max-lg:pr-6 max-xl:pr-9 max-2xl:pr-12 max-2xl-high:pr-16 pr-28 " +
        "max-xl:pb-24 pb-28 " +
        "max-sm:pl-3 max-lg:pl-6 max-xl:pl-9 max-2xl:pl-6 pl-16 " + ""
    
    return (
        <div>
            <div className={"max-w-full w-full flex max-lg:flex-col flex-row max-lg:gap-12 relative"}>
                <div className={"max-w-full max-lg:w-full w-2/5 relative"}>
                    <AboutBanner />
                </div>
                <div className={clsx(responsivePadding, "max-w-full max-lg:w-full w-3/5 h-full flex flex-col grow-0 shrink basis-auto relative")}>
                    <AboutContent />
                </div>
            </div>
        </div>
    );
};

export default About;