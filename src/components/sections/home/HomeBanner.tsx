import React from "react";

import { ContactButton } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const HomeBanner: React.FC = () => {
    const { experienceYears, projects } = PERSONAL_IDENTIFIABLE_INFORMATION;

    return (
        <div className={"relative w-fit h-fit"}>
            <img src="/banner.png" alt="Banner" className={"max-w-full h-auto"}/>
            <ContactButton
                label={"Years Experience"}
                numberLabel={experienceYears.toString()}
                position={"top-[30%] max-lg:left-[-3%] -left-1/5"}
            />
            <ContactButton
                label={"Completed Project"}
                numberLabel={projects.length.toString()}
                position={"bottom-[30%] max-lg:right-[-3%] -right-1/5"}
            />
        </div>
    );
};

export default HomeBanner;