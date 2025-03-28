import React from "react";

import { ContactBanner, ContactContent } from "@/components";

const Contact = React.memo(() => {
    return (
        <div>
            <div className={"max-w-full w-full flex flex-row relative"}>
                <div className={"max-w-full w-2/5 relative"}>
                    <ContactBanner />
                </div>
                <div className={"max-w-full w-3/5 h-full pt-12 px-32 flex flex-col grow-0 shrink basis-auto relative"}>
                    <ContactContent />
                </div>
            </div>
        </div>
    );
});

export default Contact;