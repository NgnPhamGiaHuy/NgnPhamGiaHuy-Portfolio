import { MdLocationOn } from "react-icons/md";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import { ContactItemProps } from "@/types";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

export const CONTACTS: ContactItemProps[] = [
    {
        icon: <FiMail className={"w-5 h-5"} />,
        title: "To Know More",
        label: "Email",
        value: PERSONAL_IDENTIFIABLE_INFORMATION.contacts.email,
        href: `mailto:${PERSONAL_IDENTIFIABLE_INFORMATION.contacts.email}`,
    },
    {
        icon: <FiPhoneCall className={"w-5 h-5"} />,
        title: "Update Info",
        label: "Phone",
        value: PERSONAL_IDENTIFIABLE_INFORMATION.contacts.phone,
        href: `tel:${PERSONAL_IDENTIFIABLE_INFORMATION.contacts.phone}`,
    },
    {
        icon: <MdLocationOn className={"w-5 h-5"} />,
        title: "Local Coordinator",
        label: "Location",
        value: PERSONAL_IDENTIFIABLE_INFORMATION.contacts.location,
        href: "#",
    },
];