import React from "react";

import { ContactBanner, ContactContent } from "@/components";

const Contact: React.FC = () => {
    return (
        <div>
            <div className={"max-w-full w-full flex max-lg:flex-col flex-row max-lg:gap-12 relative"}>
                <div className={"max-w-full max-lg:w-full w-2/5 relative"}>
                    <ContactBanner />
                </div>
                <div className={"max-w-full max-lg:w-full w-3/5 h-full responsive-padding-content flex flex-col grow-0 shrink basis-auto relative"}>
                    <ContactContent />
                </div>
            </div>
        </div>
    );
};

export default Contact;