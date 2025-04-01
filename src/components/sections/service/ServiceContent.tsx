import clsx from "clsx";
import React from "react";
import { PiCheckFatFill } from "react-icons/pi";

import { ServiceProps } from "@/types";
import { Heading } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const ServiceContent: React.FC = () => {
    const { services } = PERSONAL_IDENTIFIABLE_INFORMATION;

    return (
        <div className={"content-padding-responsive overflow-hidden"}>
            { services.map((item: ServiceProps, index: number, arr: ServiceProps[]) => (
                <div key={index} className={`${ index === 0 ? "rounded-t-lg border-b-0" : index === arr.length - 1 ? "rounded-b-lg border-b" : "border-b-0"} max-md:p-5 max-md:block grid grid-cols-[11%_32%_57%] items-center border  border-solid border-primary-2-opc group transition-all duration-350 relative z-[1] hover:bg-white`}>
                    <div className={"h-full max-md:mb-4 max-md:p-0 max-xl:px-4 max-xl:py-8 p-8 flex-center max-md:justify-start max-md:border-r-0 border-r border-solid border-primary-2-opc"}>
                        { item.icon }
                    </div>
                    <Heading level={2} size={"custom"} fontWeight={"medium"} className={"max-md:mb-4 max-md:p-0 py-8 pl-8 pr-4 text-xl"}>
                        { item.title }
                    </Heading>
                    <div className={"max-sm:max-w-68 max-md:max-w-112 max-w-130 w-full max-md:p-0 py-8 pr-12"}>
                        <ul className={"max-xl:columns-[unset] columns-2 gap-x-0"}>
                            { item.list.map((value: string, index: number, array) => (
                                <li key={index} className={clsx({ "mb-6": index !== array.length - 1}, "flex items-center gap-2  text-xs text-text font-medium font-montserrat leading-tight")}>
                                    <PiCheckFatFill className={"text-primary-1"}/>
                                    { value }
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default ServiceContent;