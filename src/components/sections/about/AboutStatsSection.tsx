import React from "react";

import { AnimatedStatCard } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutStatsSection : React.FC = () => {
    const profile = PERSONAL_IDENTIFIABLE_INFORMATION.profile;
    const cardList = [
        { title: "Years Of Experience", targetNumber: profile.experienceYear },
        { title: "Certificates received", targetNumber: profile.certificates.length.toString() },
        { title: "Projects Complete", targetNumber: profile.projectsCompleted },
    ]

    return (
        <div className={"max-w-192.5 w-full mt-10 flex flex-row grow-0 shrink basis-auto"}>
            <div className={"w-full flex-between flex-row flex-nowrap gap-7.5"}>
                { cardList.map((card, index) => (
                    <AnimatedStatCard key={index} title={card.title} targetNumber={card.targetNumber} />
                )) }
            </div>
        </div>
    );
};

export default AboutStatsSection;