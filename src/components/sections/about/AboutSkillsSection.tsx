import React, { useMemo } from "react";

import { AboutLayout, SkillColumn } from "@/components";
import { divideSkillsIntoColumns } from "@/utils";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutSkillsSection: React.FC = () => {
    const { skills } = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    const skillColumns: { name: string, url: string }[][] = useMemo(
        (): { name: string, url: string }[][] => divideSkillsIntoColumns(skills),
        [skills]
    );

    return (
        <AboutLayout title={"Professional Skill"}>
            <div>
                <div className={"mt-[calc(-1*3rem)] mx-[calc(-0.5*1.5rem)] flex flex-wrap"}>
                    { skillColumns.map((column: { name: string, url: string }[], index: number) => (
                        <SkillColumn key={index} column={column} />
                    ))}
                </div>
            </div>
        </AboutLayout>
    );
};

export default AboutSkillsSection;