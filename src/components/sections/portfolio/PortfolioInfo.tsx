import clsx from "clsx";
import React from 'react';

import { Heading } from "@/components";

const PortfolioInfo: React.FC = () => {
    return (
        <ul className={"mt-6 mb-4 max-md:py-8 max-lg:py-10 py-12 max-sm:columns-[unset] max-md:columns-2 max-md:block flex-between gap-10 border-t border-b border-primary-2/10"}>
            { [1, 2, 3, 4].map((item, index: number, array) => (
                <li key={index} className={clsx({ "max-md:border-0 border-r border-primary-1/30" : index !== array.length - 1 }, "max-md:mb-6 max-lg:pr-5 max-2xl-high:pr-8 pr-10")}>
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