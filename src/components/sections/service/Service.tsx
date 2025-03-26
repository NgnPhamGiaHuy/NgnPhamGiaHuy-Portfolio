import React from "react";

import { ServiceBanner, ServiceContent } from "@/components";

const Service : React.FC = () => {
    return (
        <div>
            <div className={"max-w-full w-full flex flex-row relative"}>
                <div className={"max-w-full w-2/5 relative"}>
                    <ServiceBanner />
                </div>
                <div className={"max-w-full w-3/5 h-full pt-16 pr-28 pb-32 pl-16 flex flex-col grow-0 shrink basis-auto overflow-hidden relative"}>
                    <ServiceContent />
                </div>
            </div>
        </div>
    );
};

export default Service;