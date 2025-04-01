import React from "react";

import { Banner, FAQBanner, FAQContent } from "@/components";

const FAQ: React.FC = () => {
    return (
        <div>
            <div className={"section-container"}>
                <Banner align={"start"} justify={"between"}>
                    <FAQBanner />
                </Banner>
                <div className={"section-content-large"}>
                    <FAQContent />
                </div>
            </div>
        </div>
    );
};

export default FAQ;