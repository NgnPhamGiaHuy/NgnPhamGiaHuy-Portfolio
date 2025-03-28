"use client"

import clsx from "clsx";
import React, { useCallback, useState } from "react";

import { TimelineEntry } from "@/types";
import { AboutSectionTitle, CollapsibleItem, Heading } from "@/components";

interface AboutCollapsibleSectionProps {
    title: string;
    list: TimelineEntry[];
}

const AboutCollapsibleSection : React.FC<AboutCollapsibleSectionProps> = React.memo(({ title, list }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    return (
        <div>
            <div className={"h-full mt-16"}>
                <AboutSectionTitle title={title} />
                <div>
                    { list.map((item, index) => (
                        <CollapsibleItem key={index} index={index} activeIndex={activeIndex}>
                            <Heading level={4} size={"custom"} className={"text-lg uppercase break-words leading-snug"}>
                                <button onClick={() => handleClick(list.indexOf(item))} className={clsx({"about-button-after-active" : activeIndex === list.indexOf(item)}, "about-button after:top-6.5 after:right-0 about-button-after")}>
                                    { item.title }
                                </button>
                            </Heading>
                            <div className={"mb-4 flex-between flex-wrap gap-4"}>
                                <Heading level={5} size={"custom"} fontWeight={"semibold"} className={"text-xl italic leading-normal"}>
                                    { item.subtitle }
                                </Heading>
                                <span className={"text-base text-title italic font-medium leading-none"}>
                                    { item.year.split(" - ")[0]} - &nbsp;
                                    { ["present", "now"].includes(item.year.split(" - ")[1]?.toLowerCase()) ? (
                                        <strong className={"text-primary-1 uppercase"}>{ item.year.split(" - ")[1] }</strong>
                                    ) : (
                                        item.year.split(" - ")[1]
                                    ) }
                                </span>
                            </div>
                            <p>
                                { item.description }
                            </p>
                        </CollapsibleItem>
                    )) }
                </div>
            </div>
        </div>
    );
});

export default AboutCollapsibleSection;