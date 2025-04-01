"use client"

import React from "react";

import { HomeBanner, HomeIntroduction } from "@/components";

const Home: React.FC = () => {
    return (
        <div className={"max-xl:h-auto w-full h-full"}>
            <div className={"home-padding-responsive"}>
                <div className={"w-full mx-auto px-[calc(1.5rem*0.5)]"}>
                    <div className={"mt-[calc(-1*3rem)] mx-[calc(-0.5*1.5rem)] flex-between flex-wrap"}>
                        <div className={"max-w-full max-lg:w-full w-1/2 mt-12 px-[calc(0.5*1.5rem)] flex-none-auto"}>
                            <HomeIntroduction />
                        </div>
                        <div className={"max-w-full max-lg:w-full w-2/5 max-sm:mt-4 mt-12 px-[calc(0.5*1.5rem)] max-lg:flex-center flex-none-auto"}>
                            <HomeBanner />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;