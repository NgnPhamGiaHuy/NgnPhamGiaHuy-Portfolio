import React from "react";

import { Heading } from "@/components";

interface AboutLayoutProps {
    title: string;
    children: React.ReactNode;
}

const AboutLayout : React.FC<AboutLayoutProps> = ({ title, children }) => {
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
};

export default AboutLayout;