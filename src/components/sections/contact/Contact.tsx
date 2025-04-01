import React from "react";

import { Banner, ContactBanner, ContactContent } from "@/components";

const Contact: React.FC = () => {
    return (
        <div>
            <div className={"section-container"}>
                <Banner>
                    <ContactBanner />
                </Banner>
                <div className={"section-content-large"}>
                    <ContactContent />
                </div>
            </div>
        </div>
    );
};

export default Contact;