import React, { useMemo } from "react";

import { AnimatedStatCard } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutStatsSection: React.FC = () => {
    const { experienceYears, certificates, projectsCompleted } = PERSONAL_IDENTIFIABLE_INFORMATION;

    const cardList = useMemo(() => [
        { title: "Years Of Experience", targetNumber: experienceYears },
        { title: "Certificates received", targetNumber: certificates.length.toString() },
        { title: "Projects Complete", targetNumber: projectsCompleted.toString() },
    ], [experienceYears, certificates, projectsCompleted]);

    return (
        <div className={"max-w-192 w-full mt-12 flex flex-row grow-0 shrink basis-auto"}>
            <div className={"w-full flex-between flex-row flex-nowrap gap-8"}>
                { cardList.map((card, index) => (
                    <AnimatedStatCard key={index} title={card.title} targetNumber={card.targetNumber} />
                )) }
            </div>
        </div>
    );
};

export default AboutStatsSection;