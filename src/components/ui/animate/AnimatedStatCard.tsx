import React from "react";

import { AnimatedCounter } from "@/components";

const extractNumberAndSuffix = (input: string): { number: number; suffix: string } => {
    const match = input.match(/(\d+)(\D*)/);
    const number = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : "";
    
    return { number, suffix };
};

const AnimatedStatCard: React.FC<{ title:string, targetNumber: string }> = React.memo(({ title, targetNumber }) => {
    const { number, suffix } = extractNumberAndSuffix(targetNumber);
    
    return (
        <div className={"max-w-full max-xl:w-40 w-48"}>
            <div className={"flex flex-col-reverse items-stretch justify-center gap-2"}>
                <div className={"flex-center flex-1"}>
                    <span className={"max-sm:text-sm text-lg text-text max-xl:text-center font-normal font-(family-name:--font-montserrat) max-sm:leading-5 leading-8"}>
                        { title }
                    </span>
                </div>
                <div className={"flex flex-1 max-sm:text-3xl text-[40px] text-title text-center font-bold leading-10"}>
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

AnimatedStatCard.displayName = "AnimatedStatCard";

export default AnimatedStatCard;