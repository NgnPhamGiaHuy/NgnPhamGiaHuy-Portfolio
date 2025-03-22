import React from "react";
import Link from "next/link";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { DownloadCVButton, Paragraph, SubTitle, Title } from "@/components";


const Introduction : React.FC = () => {
    const profile = PERSONAL_IDENTIFIABLE_INFORMATION.profile;
    
    return (
        <div>
            <Title margin={"mb-5"}>
                I'm { profile.fullName }
            </Title>
            <div className={"mb-8.75"}>
                <SubTitle>
                    I Am,
                    <span className={"ml-1 p-1 text-2xl text-white bg-primary-1 leading-none inline-block"}>
                        { profile.title }
                    </span>
                </SubTitle>
            </div>
            <Paragraph className={"mb-12"}>
                { profile.bio }
            </Paragraph>
            <div className={"flex items-center gap-15"}>
                <DownloadCVButton fileName={"CV.pdf"}>
                    Download My CV
                </DownloadCVButton>
                <Link href={"/about"}>
                    <span className={"text-sm text-text font-semibold whitespace-nowrap leading-none transition-all duration-500 hover:text-primary-1"}>
                        About More
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Introduction;