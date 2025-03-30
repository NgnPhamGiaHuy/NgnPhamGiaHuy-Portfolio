import React from "react";
import { PiCheckFatFill } from "react-icons/pi";

import { ServiceProps } from "@/types";
import { Heading } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const ServiceContent: React.FC = () => {
    const { services } = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    return (
        <div>
            { services.map((item: ServiceProps, index: number, arr: ServiceProps[]) => (
                <div key={index} className={`${ index === 0 ? "rounded-t-lg border-b-0" : index === arr.length - 1 ? "rounded-b-lg border-b" : "border-b-0"} grid grid-cols-[11%_32%_57%] items-center border  border-solid border-primary-2-opc group transition-all duration-350 relative z-[1] hover:bg-white`}>
                    <div className={"h-full p-8 flex-center border-r border-solid border-primary-2-opc"}>
                        { item.icon }
                    </div>
                    <Heading level={2} size={"custom"} fontWeight={"medium"} className={"py-8 pl-8 pr-4 text-xl"}>
                        { item.title }
                    </Heading>
                    <div className={"max-w-130 w-full py-8 pr-12"}>
                        <ul className={"columns-2 gap-x-0"}>
                            { item.list.map((item: string, index: number) => (
                                <li key={index} className={"mb-6 flex items-center gap-2  text-xs text-text font-medium font-(family-name:--font-montserrat) leading-tight"}>
                                    <PiCheckFatFill className={"text-primary-1"}/>
                                    { item }
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