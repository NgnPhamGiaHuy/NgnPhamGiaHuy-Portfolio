import React from "react";

import { ServiceBanner, ServiceContent } from "@/components";

const Service : React.FC = () => {
    return (
        <div>
            <div className={"max-w-full w-full flex flex-row relative"}>
                <div className={"max-w-full w-[40%] relative"}>
                    <ServiceBanner />
                </div>
                <div className={"max-w-full w-[60%] h-full pt-17.5 pr-30 pb-35 pl-17.5 flex flex-col grow-0 shrink basis-auto overflow-hidden relative"}>
                    <ServiceContent />
                </div>
            </div>
        </div>
    );
};

export default Service;