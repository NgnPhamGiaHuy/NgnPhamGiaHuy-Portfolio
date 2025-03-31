import React from 'react';
import clsx from "clsx";
import { Heading } from "@/components";
import Link from "next/link";
import { ContactItemProps } from "@/types";

interface ContactItems {
    index: number;
    arrayIndex: number;
    contact: ContactItemProps;
}

const ContactItem: React.FC<ContactItems> = ({ index, arrayIndex, contact }) => {
    return (
        <li className={clsx({ "mb-8": index !== arrayIndex - 1 }, "max-w-full w-full flex items-center gap-4")}>
            <div className={"max-w-10 min-w-10 w-10 max-h-10 min-h-10 h-10 flex-center rounded-full border border-solid border-title hover:text-white hover:bg-primary-1 transition-all"}>
                { contact.icon }
            </div>
            <div>
                <span className={"text-base text-text font-(family-name:--font-montserrat) font-semibold"}>
                    { contact.label }
                </span>
                <Heading level={4} size={"custom"} fontWeight={"semibold"} className={"max-sm:text-base text-lg font-(family-name:--font-montserrat) leading-tight break-all overflow-hidden whitespace-normal"}>
                    <Link href={contact.href} className={"break-words overflow-hidden"}>
                        { contact.value }
                    </Link>
                </Heading>
            </div>
        </li>
    );
};

export default ContactItem;