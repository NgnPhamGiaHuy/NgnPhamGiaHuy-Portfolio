"use client"

import React, { useState } from "react";

import { TimelineEntry } from "@/types";
import { AboutSectionTitle, CollapsibleItem } from "@/components";

interface AboutCollapsibleSectionProps {
    title: string;
    list: TimelineEntry[];
}

const AboutCollapsibleSection : React.FC<AboutCollapsibleSectionProps> = ({ title, list }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    return (
        <div>
            <div className={"h-full mt-16"}>
                <AboutSectionTitle title={title} />
                <div>
                    { list.map((item, index) => (
                        <CollapsibleItem key={index} title={item.title} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                            <div className={"mb-5 flex-between flex-wrap gap-4"}>
                                <h3 className={"text-[20px] text-title italic font-semibold leading-[1.5]"}>
                                    { item.subtitle }
                                </h3>
                                <span className={"text-base text-title italic font-medium leading-none"}>
                                    { item.year.split(" - ")[0]} - &nbsp;
                                    { ["present", "now"].includes(item.year.split(" - ")[1]?.toLowerCase()) ? (
                                        <strong className={"text-primary-1 uppercase"}>
                                            {item.year.split(" - ")[1]}
                                        </strong>
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
};

export default AboutCollapsibleSection;