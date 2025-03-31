import React from "react";
import Link from "next/link";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { DownloadCVButton, Paragraph, Heading } from "@/components";

const HomeIntroduction: React.FC = () => {
    const { fullName, title, bio } = PERSONAL_IDENTIFIABLE_INFORMATION;

    return (
        <div>
            <Heading level={1} size={"custom"} className={"mb-4 max-sm:text-4xl max-md:text-[3.125rem] max-xl:text-[3.375rem] max-2xl:text-[3.625rem] max-2xl-mid:text-[5rem] text-[5.375rem] leading-snug"} >
                I&apos;m { fullName }
            </Heading>
            <div className={"max-sm:mb-6 mb-8"}>
                <Heading level={2} color={"text-text"} fontWeight={"medium"} size={"custom"} className={"max-sm:text-base text-lg leading-none"}>
                    I Am,
                    <span className={"ml-1 p-1 max-sm:text-base text-2xl text-white bg-primary-1 leading-none inline-block"}>
                        { title }
                    </span>
                </Heading>
            </div>
            <Paragraph size={"custom"} className={"max-sm:mb-6 max-2xl:mb-12 mb-16 max-xl:text-sm text-lg leading-relaxed"}>
                { bio }
            </Paragraph>
            <div className={"flex items-center max-sm:gap-8 gap-16"}>
                <DownloadCVButton fileName={"CV.pdf"}>
                    Download My CV
                </DownloadCVButton>
                <Link href={"/about"} className={"max-sm:text-xs text-sm text-text font-semibold whitespace-nowrap leading-none transition-all duration-500 hover:text-primary-1"}>
                    About More
                </Link>
            </div>
        </div>
    );
};

export default HomeIntroduction;