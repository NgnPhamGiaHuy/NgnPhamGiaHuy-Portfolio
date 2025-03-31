import React from "react";
import { FcServices } from "react-icons/fc";

import { Banner, Paragraph, Heading, SectionTitle, Button } from "@/components";

const ServiceBanner: React.FC = () => {
    return (
        <Banner margin={"responsive-margin-banner"} padding={"responsive-padding-banner"} align={"start"} justify={"between"} className={"max-lg:gap-12"}>
            <div>
                <SectionTitle text={"What I Do"} icon={<FcServices className={"w-6 h-6"} />} />
                <Heading level={1} size={"custom"} className={"max-sm:mb-5 max-2xl:mb-6 mb-8 responsive-heading-size leading-tight"} >
                    My Services
                </Heading>
                <Paragraph size={"custom"} className={"max-sm:text-sm text-base leading-7"}>
                    UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers
                </Paragraph>
            </div>
            <div className={"pt-6 flex"}>
                <Button size={"lg"} color={"secondary"}>See Pricing Plan</Button>
            </div>
        </Banner>
    );
};

export default ServiceBanner;