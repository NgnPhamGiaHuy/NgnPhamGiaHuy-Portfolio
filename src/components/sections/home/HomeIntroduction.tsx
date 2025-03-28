import React from "react";
import Link from "next/link";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { DownloadCVButton, Paragraph, Heading } from "@/components";

const HomeIntroduction : React.FC = React.memo(() => {
    const { fullName, title, bio } = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    return (
        <div>   
            <Heading level={1} size={"custom"} className={"mb-4 text-[5.375rem] leading-snug"} >
                I'm { fullName }
            </Heading>
            <div className={"mb-8"}>
                <Heading level={2} color={"text-text"} fontWeight={"medium"} size={"custom"} className={"text-lg leading-none"}>
                    I Am,
                    <span className={"ml-1 p-1 text-2xl text-white bg-primary-1 leading-none inline-block"}>
                        { title }
                    </span>
                </Heading>
            </div>
            <Paragraph className={"mb-12 leading-relaxed"}>
                { bio }
            </Paragraph>
            <div className={"flex items-center gap-16"}>
                <DownloadCVButton fileName={"CV.pdf"}>
                    Download My CV
                </DownloadCVButton>
                <Link href={"/about"} className={"text-sm text-text font-semibold whitespace-nowrap leading-none transition-all duration-500 hover:text-primary-1"}>
                    About More
                </Link>
            </div>
        </div>  
    );
});

export default HomeIntroduction;