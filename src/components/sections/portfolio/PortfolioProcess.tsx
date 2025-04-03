import React from 'react';
import { VscTools } from "react-icons/vsc";

import { Heading, PortfolioWrapper } from "@/components";

const PortfolioProcess = () => {
    return (
        <PortfolioWrapper title={"My Process"}>
            <div className={"-mt-4 -mx-2 flex flex-wrap"}>
                { [1, 2, 3].map((value, index) => (
                    <div key={index} className={"w-1/3 mt-4 px-2 flex-none-auto"}>
                        <div className={"pt-4 pr-4 pb-8 pl-8 bg-dark-white rounded-4xl border-r-4 border-b-4 border-solid border-primary-2 hover:border-primary-1 transition-all group"}>
                            <div className={"mb-2 flex-between gap-4"}>
                                <span className={"text-base text-primary-1 font-normal leading-none"}>
                                    Step 01
                                </span>
                                <VscTools className={"w-10 h-10 opacity-10 group-hover:opacity-100 group-hover:text-primary-1 transition-all"}/>
                            </div>
                            <Heading level={4} size={"custom"} fontWeight={"semibold"} className={"mb-6 text-2xl font-montserrat leading-snug"}>
                                Research
                            </Heading>
                            <ul>
                                { [1, 2, 3].map((item, index) => (
                                    <li key={index} className={"mb-4 pl-4 text-sm font-montserrat font-medium leading-snug relative dot-before"}>
                                        Brand Design
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </PortfolioWrapper>
    );
};

export default PortfolioProcess;