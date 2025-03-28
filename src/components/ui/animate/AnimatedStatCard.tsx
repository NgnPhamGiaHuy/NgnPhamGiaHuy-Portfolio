import React from "react";

import { AnimatedCounter } from "@/components";

interface AnimatedStatCardProps {
    title: string;
    targetNumber: string;
}

const extractNumberAndSuffix = (input: string): { number: number; suffix: string } => {
    const match = input.match(/(\d+)(\D*)/);
    const number = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : "";
    
    return { number, suffix };
};

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = React.memo(({ title, targetNumber }) => {
    const { number, suffix } = extractNumberAndSuffix(targetNumber);
    
    return (
        <div className={"max-w-full w-48"}>
            <div className={"flex flex-col-reverse items-stretch justify-center gap-2"}>
                <div className={"flex-center flex-1"}>
                    <span className={"text-lg text-text font-normal font-(family-name:--font-montserrat) leading-8"}>
                        { title }
                    </span>
                </div>
                <div className={"flex flex-1 text-[40px] text-title text-center font-bold leading-10"}>
                    <div className={"text-end whitespace-pre-wrap grow"}></div>
                    <AnimatedCounter targetNumber={number} />
                    { suffix && (
                        <span className={"ml-1"}>
                            { suffix }
                        </span>
                    ) }
                    <div className={"text-start whitespace-pre-wrap grow"}></div>
                </div>
            </div>
        </div>
    );
});

export default AnimatedStatCard;