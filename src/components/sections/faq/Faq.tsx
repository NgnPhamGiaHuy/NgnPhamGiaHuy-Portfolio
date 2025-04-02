import React from "react";

import { Banner, FaqBanner, FaqContent } from "@/components";

const Faq: React.FC = () => {
    return (
        <div>
            <div className={"section-container"}>
                <Banner align={"start"} justify={"between"}>
                    <FaqBanner />
                </Banner>
                <div className={"section-content-large"}>
                    <FaqContent />
                </div>
            </div>
        </div>
    );
};

export default Faq;