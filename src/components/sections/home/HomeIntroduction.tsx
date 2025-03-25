import React from "react";
import Link from "next/link";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { DownloadCVButton, Paragraph, SubTitle, Title } from "@/components";

const HomeIntroduction : React.FC = () => {
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    return (
        <div>
            <Title className={"mb-5 text-[5.375rem] font-extrabold leading-[1.3]"} size={"custom"}>
                I'm { info.fullName }
            </Title>
            <div className={"mb-8.75"}>
                <SubTitle className={"font-medium leading-none"}>
                    I Am,
                    <span className={"ml-1 p-1 text-2xl text-white bg-primary-1 leading-none inline-block"}>
                        { info.title }
                    </span>
                </SubTitle>
            </div>
            <Paragraph className={"mb-12"}>
                { info.bio }
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

export default HomeIntroduction;