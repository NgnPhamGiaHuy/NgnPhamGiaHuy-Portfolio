"use client"

import React from "react";

import { HomeBanner, HomeIntroduction } from "@/components";

const Home: React.FC = () => {
    return (
        <div className={"max-xl:h-auto w-full h-full"}>
            <div className={
                "max-sm:pt-4 max-lg:pt-16 max-xl:pt-10 max-2xl:pt-8 max-2xl-high:pt-12 pt-28 " +
                "max-sm:pr-0 max-md:pr-2 max-lg:pr-10 max-2xl-mid:pr-20 max-2xl-high:pr-32 pr-40 " +
                "max-xl:pb-16 max-2xl-high:pb-24 pb-28 " +
                "max-sm:pl-0 max-md:pl-2 max-lg:pl-10 max-2xl:pl-5 max-2xl-mid:pl-16 max-2xl-high:pl-28 pl-36"
            }>
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