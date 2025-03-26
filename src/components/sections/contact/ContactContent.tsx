import React from 'react';

import { ContactForm, Heading } from "@/components";

const ContactContent : React.FC = () => {
    return (
        <>
            <div className={"mt-8"}>
                <Heading level={2} size={"md"} fontWeight={"medium"} className={"about-heading-before leading-snug inline-block relative"}>
                    Reach Me Anytime
                </Heading>
            </div>
            <ContactForm/>
        </>
    );
};

export default ContactContent;