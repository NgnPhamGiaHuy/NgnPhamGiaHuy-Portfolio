import React from "react";

import { Heading } from "@/components";

interface AboutLayoutProps {
    title: string;
}

const AboutLayout : React.FC<React.PropsWithChildren<AboutLayoutProps>> = React.memo(({ title, children }) => {
    return (
        <div>
            <div className={"h-full mt-24"}>
                <div className={"mb-16"}>
                    <Heading level={3} size={"md"} fontWeight={"medium"} className={"about-heading-before leading-snug inline-block relative"}>
                        { title }
                    </Heading>
                </div>
                { children }
            </div>
        </div>
    );
});

export default AboutLayout;