import clsx from "clsx";
import React from "react";

import { Heading } from "@/components";

const SkillItem: React.FC<{ isLast: boolean, skill: { name: string; url: string } }> = React.memo(({ skill, isLast }) => {
    return (
        <li className={clsx(!isLast && "max-sm:mb-8 mb-12", "flex items-center relative max-sm:gap-2 gap-4 text-lg leading-8", "before:w-[2px] before:h-6 before:top-1/2 before:-left-2 before:-translate-y-1/2 before:bg-primary-1 before:absolute",)}>
            <div className="max-sm:w-10 w-12 max-sm:h-10 h-12 flex-center rounded-sm bg-white">
                <img src={skill.url} alt={skill.name} className={" max-sm:w-10 w-12 max-sm:h-10 h-12 object-contain"}/>
            </div>
            <div className="w-full">
                <Heading level={4} size="custom" fontWeight="normal" className="max-sm:text-base text-xl leading-3">
                    { skill.name }
                </Heading>
            </div>
        </li>
    );
});

SkillItem.displayName = "SkillItem";

export default SkillItem;