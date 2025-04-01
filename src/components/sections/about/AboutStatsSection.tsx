import React, { useMemo } from "react";

import { AnimatedStatCard } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutStatsSection: React.FC = () => {
    const { experienceYears, certificates, projects } = PERSONAL_IDENTIFIABLE_INFORMATION;

    const cardList: {  title: string, targetNumber: string }[] = useMemo(() => [
        { title: "Years Of Experience", targetNumber: experienceYears },
        { title: "Certificates received", targetNumber: certificates.length.toString() },
        { title: "Projects Complete", targetNumber: projects.length.toString() },
    ], [experienceYears, certificates, projects]);

    return (
        <div className={"max-w-192 w-full mt-12 flex flex-row grow-0 shrink basis-auto"}>
            <div className={"w-full flex-between max-xl:items-start flex-row flex-nowrap gap-8"}>
                { cardList.map((card, index) => (
                    <AnimatedStatCard key={index} title={card.title} targetNumber={card.targetNumber} />
                )) }
            </div>
        </div>
    );
};

export default AboutStatsSection;