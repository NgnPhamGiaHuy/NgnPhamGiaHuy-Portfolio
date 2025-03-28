"use client"

import React from "react";

import { HomeBanner, HomeIntroduction } from "@/components";

const Home: React.FC = () => {
    return (
        <div className={"h-full"}>
            <div className={"pr-40 pl-36 py-28"}>
                <div className={"w-full mx-auto px-[calc(1.5rem*0.5)]"}>
                    <div className={"mt-[calc(-1*3rem)] mx-[calc(-0.5*1.5rem)] flex-between flex-wrap"}>
                        <div className={"max-w-full w-1/2 mt-12 px-[calc(0.5*1.5rem)] flex-none-auto"}>
                            <HomeIntroduction />
                        </div>
                        <div className={"max-w-full w-2/5 mt-12 px-[calc(0.5*1.5rem)] flex-none-auto"}>
                            <HomeBanner />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;