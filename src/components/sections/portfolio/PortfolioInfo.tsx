import clsx from "clsx";
import React from 'react';

import { Heading } from "@/components";

const PortfolioInfo: React.FC = () => {
    return (
        <ul className={"mt-6 mb-4 py-12 flex-between gap-10 border-t border-b border-primary-2/10"}>
            { [1, 2, 3, 4].map((item, index: number, array) => (
                <li key={index} className={clsx({ "border-r border-primary-1/30": index !== array.length - 1 }, "pr-10")}>
                    <span className={"mb-2 text-sm font-normal text-primary-1 leading-none"}>
                        Client
                    </span>
                    <Heading level={3} size={"custom"} fontWeight={"semibold"} className={"text-lg font-montserrat leading-snug"}>
                        Argova Josen
                    </Heading>
                </li>
            )) }
        </ul>
    );
};

export default PortfolioInfo;