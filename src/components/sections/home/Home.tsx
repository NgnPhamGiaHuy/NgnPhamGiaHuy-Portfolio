"use client"

import React from "react";

import { HomeBanner, Introduction } from "@/components";

const Home : React.FC = () => {
    return (
        <div className={"h-full"}>
            <div className={"pr-40 pl-35 py-27.5"}>
                <div className={"w-full mx-auto px-[calc(1.5rem*0.5)]"}>
                    <div className={"mt-[calc(-1*3rem)] mx-[calc(-0.5*1.5rem)] flex-between flex-wrap"}>
                        <div className={"max-w-full w-1/2 mt-[3rem] px-[calc(0.5*1.5rem)] flex-none-auto"}>
                            <Introduction />
                        </div>
                        <div className={"max-w-full w-[40%] mt-[3rem] px-[calc(0.5*1.5rem)] flex-none-auto"}>
                            <HomeBanner />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;