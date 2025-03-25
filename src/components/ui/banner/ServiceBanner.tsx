import React from "react";
import { FcServices } from "react-icons/fc";

import { Banner, Paragraph, Title } from "@/components";

const ServiceBanner : React.FC = () => {
    return (
        <Banner padding={"px-20 pt-17.5 pb-55"} align={"start"} justify={"between"}>
            <div>
                <span className={"mb-1 flex items-center gap-1.5 text-base text-primary-1 font-normal leading-none"}>
                    <FcServices className={"w-6 h-6 "} />
                    What I Do
                </span>
                <Title className={"mb-7.5 text-[2.8125rem] font-extrabold leading-[1.2]"} size={"custom"} align={"left"}>
                    My Services
                </Title>
                <Paragraph>
                    UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers
                </Paragraph>
            </div>
            <div className={"pt-6 flex"}>
                <button className={`px-6 py-4 text-sm text-primary-1 whitespace-nowrap font-semibold border border-t-5 border-r-5 border-solid border-primary-1 transition-all duration-500 cursor-pointer relative hover:text-title hover:border-title`}>
                    See Pricing Plan
                </button>
            </div>
        </Banner>
    );
};

export default ServiceBanner;