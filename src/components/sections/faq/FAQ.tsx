import React from "react";

import { FAQBanner, FAQContent } from "@/components";

const Faq : React.FC = React.memo(() => {
    return (
        <div>
            <div className={"max-w-full w-full flex flex-row relative"}>
                <div className={"max-w-full w-2/5 relative"}>
                    <FAQBanner />
                </div>
                <div className={"max-w-full w-3/5 h-full pt-16 pr-40 pb-36 pl-30 flex flex-col grow-0 shrink basis-auto relative"}>
                    <FAQContent />
                </div>
            </div>
        </div>
    );
});

export default Faq;