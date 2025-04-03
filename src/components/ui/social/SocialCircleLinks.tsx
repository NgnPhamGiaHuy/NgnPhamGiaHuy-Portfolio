import React from "react";
import Link from "next/link";

import { SocialProfilesProps } from "@/types";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const SocialCircleLinks: React.FC = () => {
    const socialProfiles: SocialProfilesProps[] = PERSONAL_IDENTIFIABLE_INFORMATION.socialProfiles;

    return (
        <ul className={"flex flex-wrap items-center gap-4"}>
            { socialProfiles.map((value: SocialProfilesProps, index: number) => (
                <li key={index}>
                    <Link href={value.url} className={"px-4 py-2 flex items-center  text-sm text-title font-montserrat font-semibold border border-solid border-border rounded-[3.125rem] leading-none gap-4"}>
                        { value.icon }
                        { value.title }
                    </Link>
                </li>
            )) }
        </ul>
    );
};

export default SocialCircleLinks;