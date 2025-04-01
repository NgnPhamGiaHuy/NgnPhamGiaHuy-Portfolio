import React from "react";

import { ContactForm, Heading } from "@/components";

const ContactContent: React.FC = () => {
    return (
        <div className={"content-padding-responsive "}>
            <div>
                <Heading level={2} size={"md"} fontWeight={"medium"} className={"max-sm:mb-8 max-lg:mb-10 mb-4 max-sm:text-2xl text-3xl heading-underline leading-snug inline-block relative"}>
                    Reach Me Anytime
                </Heading>
            </div>
            <ContactForm/>
        </div>
    );
};

export default ContactContent;