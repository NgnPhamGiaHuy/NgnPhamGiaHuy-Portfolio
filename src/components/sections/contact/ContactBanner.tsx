import Link from "next/link";
import React, { useMemo } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdConnectWithoutContact, MdLocationOn } from "react-icons/md";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { Banner, Heading, Paragraph, SectionTitle } from "@/components";

interface ContactItemProps {
    icon: React.JSX.Element;
    title: string;
    label: string;
    value: string;
    href: string;
}

const ContactBanner: React.FC = () => {
    const contactInfo = PERSONAL_IDENTIFIABLE_INFORMATION.contact;

    const contacts: ContactItemProps[] = useMemo(() => [
        { icon: <FiMail className={"w-5 h-5"} />, title: "To Know More", label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
        { icon: <FiPhoneCall className={"w-5 h-5"} />, title: "Update Info", label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
        { icon: <MdLocationOn className={"w-5 h-5"} />, title: "Local Coordinator", label: "Location", value: contactInfo.location, href: "#" },
    ], [contactInfo]);

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
                    { contacts.map((item) => (
                        <li key={item.label} className={"mb-6 pb-6 relative before:w-50 before:h-[1px] before:bottom-0 before:left-0 before:absolute before:bg-primary-2/20"}>
                            <Heading level={2} size={"custom"} fontWeight={"normal"} className={"mb-6 text-xs leading-tight"}>
                                {item.title}
                            </Heading>
                            <div className={"flex flex-row items-center gap-4"}>
                                <div className={"max-w-10 w-10 max-h-10 h-10 flex-center text-title border border-solid border-primary-2 bg-[#FBDACF] rounded-full relative before:w-10 before:h-10 before:-bottom-1 before:-right-1 before:rounded-full before:bg-primary-2/30 before:z-[-1] before:absolute"}>
                                    {item.icon}
                                </div>
                                <div>
                                    <span className={"mb-1 text-xs text-title font-medium font-(family-name:--font-montserrat) leading-none block"}>
                                        {item.label}
                                    </span>
                                    <Link href={item.href} legacyBehavior>
                                        <a className={"text-sm text-text font-normal cursor-pointer leading-normal transition-all duration-300 hover:text-primary-1"}>
                                            {item.value}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        </Banner>
    );
};

export default ContactBanner;