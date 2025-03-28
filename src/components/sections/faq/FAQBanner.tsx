import React from "react";
import { FcServices } from "react-icons/fc";

import { Banner, Button, Heading, Paragraph, SectionTitle } from "@/components";

const FaqBanner: React.FC = () => {
    return (
        <Banner padding={"px-20 pt-16 pb-56"} align={"start"} justify={"between"}>
            <div>
                <SectionTitle text={"Frequently Asked Questions"} icon={<FcServices className={"w-6 h-6"} />} />
                <Heading level={1} size={"custom"} className={"mb-8 text-[2.8125rem] leading-tight"} >
                    FAQ
                </Heading>
                <Paragraph>
                    UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers
                </Paragraph>
            </div>
            <div className={"pt-6 flex"}>
                <Button size={"lg"} color={"secondary"}>Any Question</Button>
            </div>
        </Banner>
    );
};

export default FaqBanner;