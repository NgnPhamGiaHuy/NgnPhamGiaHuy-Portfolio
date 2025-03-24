import React from "react";
import Link from "next/link";

import { SubTitle, Title } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutBanner : React.FC = () => {
    const profile = PERSONAL_IDENTIFIABLE_INFORMATION.profile;
    const socialProfiles = PERSONAL_IDENTIFIABLE_INFORMATION.socialProfiles;
    
    return (
        <div className={"h-full"}>
            <div className={"top-0 sticky"}>
                <div className={"h-screen px-10 py-17.5 top-0 flex flex-col items-center justify-start bg-[#FBDACF] sticky"}>
                    <div className={"w-100 h-100 mx-auto mb-5 rounded-full"}>
                        <img src={"/profile-img.png"} alt="Profile Image" className={"w-100 h-100 rounded-full"}/>
                    </div>
                    <div className={"text-center"}>
                        <Title className={"mb-5 font-extrabold leading-[1.2]"} size={"lg"} align={"center"}>
                            NgnPhamGiaHuy
                        </Title>
                        <SubTitle className={"font-normal leading-[1.5]"} size={"sm"} align={"center"}>
                            I Am, &nbsp;
                            <span className={"text-xl text-primary-1 font-normal leading-[1.5] inline-block"}>
                                { profile.title }
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
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;