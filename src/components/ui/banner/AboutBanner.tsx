import React from "react";
import Link from "next/link";

import { Banner, SubTitle, Title } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutBanner : React.FC = () => {
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    const socialProfiles = info.socialProfiles;
    
    return (
        <Banner padding={"px-10 py-17.5"}>
            <div className={"w-100 h-100 mx-auto mb-5 rounded-full"}>
                <img src={"/profile-img.png"} alt="Profile Image" className={"w-100 h-100 rounded-full"}/>
            </div>
            <div className={"text-center"}>
                <Title className={"mb-5 text-[3.4375rem] font-extrabold leading-[1.2]"} size={"custom"} align={"center"}>
                    NgnPhamGiaHuy
                </Title>
                <SubTitle className={"font-normal leading-[1.5]"} size={"sm"} align={"center"}>
                    I Am, &nbsp;
                    <span className={"text-xl text-primary-1 font-normal leading-[1.5] inline-block"}>
                        { info.title }
                    </span>
                </SubTitle>
                <ul className={"mt-18.75 flex-center"}>
                    { socialProfiles.map((item, index) => (
                        <li key={index} className={"px-5 border-l border-solid border-[rgba(110,110,110,0.2)]"}>
                            <Link href={item.url}>
                                <span className={"text-text leading-none duration-500 transition-all hover:text-primary-1"}>
                                    { item.icon }
                                </span>
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        </Banner>
    );
};

export default AboutBanner;