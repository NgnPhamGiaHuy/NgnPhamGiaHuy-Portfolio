"use client";

import clsx from "clsx";
import React, { useCallback, useMemo, useState } from "react";

import { TimelineEntry } from "@/types";
import { AboutSectionTitle, CollapsibleItem, Heading, Paragraph } from "@/components";

interface AboutCollapsibleSectionProps {
    title: string;
    list: TimelineEntry[];
}

const AboutCollapsibleSection: React.FC<AboutCollapsibleSectionProps> = ({ title, list }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSetActiveIndex = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    const timelineItems = useMemo(() => list.map((item: TimelineEntry, index: number, array) => (
        <CollapsibleItem 
            key={index} 
            index={index} 
            activeIndex={activeIndex} 
            isLastIndex={index === array.length - 1}
        >
            <Heading 
                level={4} 
                size={"custom"} 
                className={"max-sm:text-sm max-xl:text-base text-lg uppercase break-words leading-snug"}
            >
                <button 
                    onClick={() => handleSetActiveIndex(index)} 
                    className={clsx({"about-button-after-active": activeIndex === index}, "about-button about-button-after")}
                    aria-expanded={activeIndex === index}
                >
                    { item.title }
                </button>
            </Heading>
            <div className={"mb-4 flex-between flex-wrap gap-4"}>
                <Heading 
                    level={5} 
                    size={"custom"} 
                    fontWeight={"semibold"} 
                    className={"max-sm:text-base text-xl italic leading-normal"}
                >
                    { item.subtitle }
                </Heading>
                <span className={"max-sm:text-sm text-base text-title italic font-medium leading-none"}>
                    { item.year.split(" - ")[0] } - &nbsp;
                    { ["present", "now"].includes(item.year.split(" - ")[1]?.toLowerCase()) ? (
                        <strong className={"text-primary-1 uppercase"}>{ item.year.split(" - ")[1] }</strong>
                    ) : (
                        item.year.split(" - ")[1]
                    ) }
                </span>
            </div>
            <Paragraph 
                size={"custom"} 
                className={"max-sm:text-sm text-base leading-[1.8]"}
            >
                { item.description }
            </Paragraph>
        </CollapsibleItem>
    )), [list, activeIndex]);

    return (
        <>
            <div className={"h-full max-md:mt-10 max-xl:mt-12 mt-16"}>
                <AboutSectionTitle title={title} />
                <div>{timelineItems}</div>
            </div>
        </>
    );
};

export default AboutCollapsibleSection;