import React from 'react';
import Link from "next/link";

import { Heading } from "@/components";
import { ContactItemProps } from "@/types";

const ContactBannerItem : React.FC<{ item: ContactItemProps }> = ({ item }) => {
    return (
        <li className={"mb-6 pb-6 relative before:w-50 before:h-[1px] before:bottom-0 before:left-0 before:absolute before:bg-primary-2/20"}>
            <Heading level={2} size={"custom"} fontWeight={"normal"} className={"mb-6 text-xs leading-tight"}>
                { item.title }
            </Heading>
            <div className={"flex flex-row items-center gap-4"}>
                <div className={"max-w-10 w-10 max-h-10 h-10 flex-center text-title border border-solid border-primary-2 bg-[#FBDACF] rounded-full relative before:w-10 before:h-10 before:-bottom-1 before:-right-1 before:rounded-full before:bg-primary-2/30 before:z-[-1] before:absolute"}>
                    { item.icon }
                </div>
                <div>
                    <span className={"mb-1 text-xs text-title font-medium font-(family-name:--font-montserrat) leading-none block"}>
                        { item.label }
                    </span>
                    <Link href={item.href} legacyBehavior>
                        <span className={"text-sm text-text font-normal cursor-pointer leading-normal transition-all duration-300 hover:text-primary-1"}>
                            { item.value }
                        </span>
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default ContactBannerItem;