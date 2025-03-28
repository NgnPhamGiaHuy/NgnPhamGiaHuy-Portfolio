import Link from "next/link";
import React, { useMemo } from "react";

import { Banner, Heading } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutBanner: React.FC = () => {
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;

    const socialProfiles = useMemo(() =>
        info.socialProfiles.map((item, index) => (
            <li key={index} className={"px-4 border-l border-solid border-[rgba(110,110,110,0.2)]"}>
                <Link href={item.url}>
                    <span className={"text-text leading-none duration-500 transition-all hover:text-primary-1"}>
                        { item.icon }
                    </span>
                </Link>
            </li>
        )), [info]);

    return (
        <Banner padding={"px-8 py-16"}>
            <div className={"w-100 h-100 mx-auto mb-5 rounded-full"}>
                <img src={"/profile-img.png"} alt="Profile Image" className={"w-100 h-100 rounded-full"}/>
            </div>
            <div className={"text-center"}>
                <Heading level={1} size={"custom"} align={"center"} fontWeight={"extrabold"} className={"mb-4 text-[3.4375rem] leading-tight"}>
                    NgnPhamGiaHuy
                </Heading>
                <Heading level={2} size={"custom"} align={"center"} fontWeight={"normal"} className={"text-base leading-normal"}>
                    I Am, &nbsp;
                    <span className={"text-xl text-primary-1 font-normal inline-block"}>
                        { info.title }
                    </span>
                </Heading>
                <ul className={"mt-20 flex-center"}>{socialProfiles}</ul>
            </div>
        </Banner>
    );
};

export default AboutBanner;