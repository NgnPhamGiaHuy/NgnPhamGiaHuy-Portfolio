import React from "react";

import { Heading } from "@/components";

const AboutLayout: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <div>
            <div className={"h-full max-lg:mt-16 max-xl:mt-20 mt-24"}>
                <div className={"max-md:mb-10 mb-16"}>
                    <Heading level={3} size={"custom"} fontWeight={"medium"} className={"heading-tertiary-text heading-underline leading-snug inline-block relative"}>
                        { title }
                    </Heading>
                </div>
                { children }
            </div>
        </div>
    );
};

export default AboutLayout;