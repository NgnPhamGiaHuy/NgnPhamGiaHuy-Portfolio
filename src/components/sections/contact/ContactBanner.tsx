import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

import { CONTACTS } from "@/constants";
import { ContactItemProps } from "@/types";
import { ContactBannerItem, Heading, Paragraph, SectionTitle } from "@/components";

const ContactBanner: React.FC = () => {
    return (
        <>
            <div className={"w-full"}>
                <SectionTitle text={"Talk About Ideas"} icon={<MdConnectWithoutContact className={"size-6"} />} />
                <Heading level={1} size={"custom"} fontWeight={"semibold"} className={"mb-8 heading-secondary-text leading-tight"}>
                    Contact Me
                </Heading>
                <Paragraph size={"custom"} className={"max-sm:text-sm text-base leading-7"}>
                    UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers.
                </Paragraph>
            </div>
            <div className={"max-2xl:pt-8 pt-24 max-lg:pb-0 max-xl:pb-28 max-2xl:pb-44 pb-55 w-full"}>
                <ul className={"max-sm:pt-8 max-lg:pt-10 max-xl:pt-12 pt-16"}>
                    { CONTACTS.map((item: ContactItemProps, index: number, array) => (
                        <ContactBannerItem key={index} item={item} isLastIndex={index !== array.length - 1} />
                    )) }
                </ul>
            </div>
        </>
    );
};

export default ContactBanner;