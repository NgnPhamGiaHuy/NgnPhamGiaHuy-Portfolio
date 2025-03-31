import React from "react";

import { ServiceBanner, ServiceContent } from "@/components";

const Service: React.FC = () => {
    return (
        <div>
            <div className={"max-w-full w-full flex max-lg:flex-col flex-row max-lg:gap-12 relative"}>
                <div className={"max-w-full max-lg:w-full w-2/5 relative"}>
                    <ServiceBanner />
                </div>
                <div className={"max-w-full max-lg:w-full w-3/5 h-full flex flex-col grow-0 shrink basis-auto relative"}>
                    <ServiceContent />
                </div>
            </div>
        </div>
    );
};

export default Service;