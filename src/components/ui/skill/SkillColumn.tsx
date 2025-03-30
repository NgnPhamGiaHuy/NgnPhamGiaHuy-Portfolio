import React from "react";

import { SkillItem } from "@/components";

const SkillColumn: React.FC<{ column: { name: string; url: string }[] }> = React.memo(({ column }) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 mt-12 px-3 flex-none-auto">
            <ul className="pl-2 pb-4 relative before:w-[2px] before:h-full before:top-0 before:left-0 before:bg-[#FBDACF] before:absolute">
                { column.map((skill: { name: string, url: string }, index: number) => (
                    <SkillItem key={index} skill={skill} isLast={index === column.length - 1} />
                )) }
            </ul>
        </div>
    );
});

export default SkillColumn;