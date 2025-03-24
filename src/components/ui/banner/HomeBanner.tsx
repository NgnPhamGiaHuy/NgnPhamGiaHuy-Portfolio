import React from "react";

import { ContactButton } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const HomeBanner : React.FC = () => {
    const profile = PERSONAL_IDENTIFIABLE_INFORMATION.profile;
    
    return (
        <div className={"relative"}>
            <img src="/banner.png" alt="Banner" className={"max-w-full h-auto"}/>
            <ContactButton label={"Years Experience"} numberLabel={profile.experienceYear} position={"top-[30%] -left-1/5"}/>
            <ContactButton label={"Completed Project"} numberLabel={profile.projectsCompleted} position={"bottom-[30%] right-0"}/>
        </div>
    );
};

export default HomeBanner;