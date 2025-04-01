import React from "react";

import { Banner, ServiceBanner, ServiceContent } from "@/components";

const Service: React.FC = () => {
    return (
        <div>
            <div className={"section-container"}>
                <Banner align={"start"} justify={"between"} className={"max-lg:gap-12"}>
                    <ServiceBanner />
                </Banner>
                <div className={"section-content-large"}>
                    <ServiceContent />
                </div>
            </div>
        </div>
    );
};

export default Service;