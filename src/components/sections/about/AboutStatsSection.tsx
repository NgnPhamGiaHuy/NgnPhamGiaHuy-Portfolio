import React from "react";

import { AnimatedStatCard } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutStatsSection : React.FC = () => {
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    const cardList = [
        { title: "Years Of Experience", targetNumber: info.experienceYear },
        { title: "Certificates received", targetNumber: info.certificates.length.toString() },
        { title: "Projects Complete", targetNumber: info.projectsCompleted.toString() },
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