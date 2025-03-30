import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

import { CONTACTS } from "@/constants";
import { ContactItemProps } from "@/types";
import { Banner, ContactBannerItem, Heading, Paragraph, SectionTitle } from "@/components";

const ContactBanner: React.FC = () => {
    return (
        <Banner padding={"px-20 py-12"}>
            <div className={"mt-12 w-full"}>
                <SectionTitle text={"Talk About Ideas"} icon={<MdConnectWithoutContact className={"w-6 h-6"} />} />
                <Heading level={1} size={"custom"} fontWeight={"semibold"} className={"text-5xl mb-8 leading-tight"}>
                    Contact Me
                </Heading>
                <Paragraph>
                    UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers.
                </Paragraph>
            </div>
            <div className={"pt-24 w-full"}>
                <ul>
                    { CONTACTS.map((item: ContactItemProps, index: number) => (
                        <ContactBannerItem key={index} item={item} />
                    )) }
                </ul>
            </div>
        </Banner>
    );
};

export default ContactBanner;