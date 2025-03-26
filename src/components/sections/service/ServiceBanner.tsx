import React from "react";
import { FcServices } from "react-icons/fc";

import { Banner, Paragraph, Heading, SectionTitle, Button } from "@/components";

const ServiceBanner : React.FC = () => {
    return (
        <Banner padding={"px-20 pt-16 pb-56"} align={"start"} justify={"between"}>
            <div>
                <SectionTitle text={"What I Do"} icon={<FcServices className={"w-6 h-6"} />} />
                <Heading level={1} size={"custom"} fontWeight={"extrabold"} className={"mb-8 text-[2.8125rem] leading-tight"} >
                    My Services
                </Heading>
                <Paragraph>
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