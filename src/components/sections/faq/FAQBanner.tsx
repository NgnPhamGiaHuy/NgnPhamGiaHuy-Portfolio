import React from "react";
import { FcServices } from "react-icons/fc";

import { Button, Heading, Paragraph, SectionTitle } from "@/components";

const FaqBanner: React.FC = () => {
    return (
        <>
            <div>
                <SectionTitle text={"Frequently Asked Questions"} icon={<FcServices className={"size-6"} />} />
                <Heading level={1} size={"custom"} className={"max-sm:mb-5 max-2xl:mb-6 mb-8 heading-secondary-text leading-tight"} >
                    FAQ
                </Heading>
                <Paragraph size={"custom"} className={"max-sm:text-sm text-base leading-7"}>
                    UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers
                </Paragraph>
            </div>
            <div className={"pt-6 flex"}>
                <Button size={"lg"} color={"secondary"}>Any Question</Button>
            </div>
        </>
    );
};

export default FaqBanner;