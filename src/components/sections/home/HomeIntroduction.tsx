import React from "react";
import Link from "next/link";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { DownloadCVButton, Paragraph, Heading } from "@/components";

const HomeIntroduction : React.FC = () => {
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    return (
        <div>
            <Heading level={1} size={"custom"} className={"mb-4 text-[5.375rem] leading-snug"} >
                I'm { info.fullName }
            </Heading>
            <div className={"mb-8"}>
                <Heading level={2} color={"text-text"} fontWeight={"medium"} size={"custom"} className={"text-lg leading-none"}>
                    I Am,
                    <span className={"ml-1 p-1 text-2xl text-white bg-primary-1 leading-none inline-block"}>
                        { info.title }
                    </span>
                </Heading>
            </div>
            <Paragraph className={"mb-12 leading-relaxed"}>
                { info.bio }
            </Paragraph>
            <div className={"flex items-center gap-16"}>
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