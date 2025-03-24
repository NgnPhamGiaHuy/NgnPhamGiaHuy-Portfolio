import React from "react";

import { AboutTitle } from "@/components";

interface AboutLayoutProps {
    title: string;
    children: React.ReactNode;
}

const AboutLayout : React.FC<AboutLayoutProps> = ({ title, children }) => {
    return (
        <div>
            <div className={"h-full mt-25"}>
                <div className={"mb-15"}>
                    <AboutTitle className={"font-medium leading-[1.3]"}>
                        { title }
                    </AboutTitle>
                </div>
                { children }
            </div>
        </div>
    );
};

export default AboutLayout;