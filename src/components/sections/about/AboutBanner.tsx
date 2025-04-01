import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components";
import { SocialProfilesProps } from "@/types";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutBanner: React.FC = () => {
    const { title, socialProfiles } = PERSONAL_IDENTIFIABLE_INFORMATION;

    const socialProfilesList = useMemo(() =>
        socialProfiles.map((item: SocialProfilesProps, index: number) => (
            <li key={index} className={"px-4 border-l border-solid border-[rgba(110,110,110,0.2)]"}>
                <Link href={item.url} aria-label={"Social Profile"}>
                    <span className={"text-text leading-none duration-500 transition-all hover:text-primary-1"}>
                        { item.icon }
                    </span>
                </Link>
            </li>
        )), [socialProfiles]);

    return (
        <section className={"text-center"}>
            <div className={"max-sm:w-62.5 max-2xl:w-70 max-2xl-mid:w-87.5 w-100 max-sm:h-62.5 max-2xl:h-70 max-2xl-mid:h-87.5 h-100 mx-auto mb-5 rounded-full"}>
                <Image
                    src={"/profile-img.png"}
                    alt={"Profile Image"}
                    width={400}
                    height={400}
                    priority
                    className={"max-sm:w-62.5 max-2xl:w-70 max-2xl-mid:w-87.5 w-100 max-sm:h-62.5 max-2xl:h-70 max-2xl-mid:h-87.5 h-100 rounded-full"}
                />
            </div>
            <Heading level={1} size={"custom"} align={"center"} className={"max-2xl-mid:mb-4 mb-5 heading-secondary-text leading-tight"}>
                NgnPhamGiaHuy
            </Heading>
            <Heading level={2} size={"custom"} align={"center"} fontWeight={"normal"} className={"max-sm:text-sm text-base leading-normal"}>
                I Am, &nbsp;
                <span className={"max-sm:text-base text-xl text-primary-1 font-normal inline-block"}>
                    { title }
                </span>
            </Heading>
            <ul className={"max-sm:pt-8 max-2xl:pt-10 max-2xl-mid:pt-12 pt-20 flex-center"}>
                {socialProfilesList}
            </ul>
        </section>
    );
};

export default AboutBanner;