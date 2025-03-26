import React from "react";

import { AboutLayout, Heading } from "@/components";
import { divideSkillsIntoColumns } from "@/utils";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const AboutSkillsSection : React.FC = () => {
    const skillColumns = divideSkillsIntoColumns(PERSONAL_IDENTIFIABLE_INFORMATION.skills);
    
    return (
        <AboutLayout title={"Professional Skill"}>
            <div>
                <div className={"mt-[calc(-1*3rem)] mx-[calc(-0.5*1.5rem)] flex flex-wrap"}>
                    { skillColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className={"w-1/3 mt-[3rem] px-[calc(0.5*1.5rem)] flex-none-auto"}>
                            <ul className={"pl-2 pb-4 relative before:w-[2px] before:h-full before:top-0 before:left-0 before:bg-[#FBDACF] before:absolute"}>
                                { column.map((skill, index, arr) => (
                                    <li key={index} className={`${ index !== arr.length - 1 ? "mb-12" : "" } flex items-center relative gap-4 text-lg leading-8 before:w-[2px] before:h-6 before:top-1/2 before:-left-2 before:-translate-y-1/2 before:bg-primary-1 before:absolute`}>
                                        <div className={"max-w-12 min-w-12 h-12 flex-center rounded-sm bg-white"}>
                                            <img src={skill.url} alt={skill.name} className={"max-w-12 w-12 max-h-12 h-12"}/>
                                        </div>
                                        <div className={"w-full"}>
                                            <div className={"w-full flex-between"}>
                                                <Heading level={4} size={"custom"} fontWeight={"normal"} className={"text-xl leading-3"}>
                                                    {skill.name}
                                                </Heading>
                                            </div>
                                        </div>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AboutLayout>
    );
};

export default AboutSkillsSection;