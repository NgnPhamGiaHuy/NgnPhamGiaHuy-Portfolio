import clsx from "clsx";
import React from 'react';

import { Heading } from "@/components";

interface SkillItemProps {
    isLast: boolean;
    skill: { name: string; url: string }; 
}

const SkillItem: React.FC<SkillItemProps> = React.memo(({ skill, isLast }) => {
    return (
        <li className={clsx(!isLast && "mb-12", "flex items-center relative gap-4 text-lg leading-8", "before:w-[2px] before:h-6 before:top-1/2 before:-left-2 before:-translate-y-1/2 before:bg-primary-1 before:absolute",)}>
            <div className="max-w-12 min-w-12 h-12 flex-center rounded-sm bg-white">
                <img src={skill.url} alt={skill.name} className={"max-w-12 w-12 max-h-12 h-12"}/>
            </div>
            <div className="w-full">
                <Heading level={4} size="custom" fontWeight="normal" className="text-xl leading-3">
                    { skill.name }
                </Heading>
            </div>
        </li>
    );
});

export default SkillItem;