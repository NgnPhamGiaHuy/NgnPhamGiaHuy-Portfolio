import React, { useMemo } from "react";

import { AboutLayout, SkillColumn } from "@/components";
import { divideSkillsIntoColumns } from "@/utils";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutSkillsSection : React.FC = React.memo(() => {
    const skillColumns = useMemo(
        () => divideSkillsIntoColumns(PERSONAL_IDENTIFIABLE_INFORMATION.skills),
        [PERSONAL_IDENTIFIABLE_INFORMATION.skills]
    );

    return (
        <AboutLayout title={"Professional Skill"}>
            <div>
                <div className={"mt-[calc(-1*3rem)] mx-[calc(-0.5*1.5rem)] flex flex-wrap"}>
                    { skillColumns.map((column, index) => (
                        <SkillColumn key={index} column={column} />
                    ))}
                </div>
            </div>
        </AboutLayout>
    );
});

export default AboutSkillsSection;