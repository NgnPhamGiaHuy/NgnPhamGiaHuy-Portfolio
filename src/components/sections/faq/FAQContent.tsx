"use client";

import React, { useState } from "react";
import { FaLayerGroup } from "react-icons/fa6";

import { FAQProps, FAQSectionProps } from "@/types";
import { CollapsibleItem, Heading } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const FaqContent: React.FC = () => {
    const { faqs } = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    const [activeIndices, setActiveIndices] = useState<{ [key: number]: number | null }>({});

    const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
        setActiveIndices((prev) => ({
            ...prev,
            [sectionIndex]: prev[sectionIndex] === questionIndex ? null : questionIndex,
        }));
    };

    return (
        <div>
            { faqs.map((faq: FAQSectionProps, sectionIndex: number) => (
                <div key={sectionIndex}>
                    <div className={`${sectionIndex !== 0 && "mt-24"} mb-12 flex items-center gap-4`}>
                        <Heading level={2} size={"custom"} fontWeight={"medium"} className={"text-2xl leading-tight"}>
                            {faq.title}
                        </Heading>
                        <FaLayerGroup className={"w-6 h-6 text-primary-1"} />
                    </div>
                    <div>
                        { faq.content.map((item: FAQProps, questionIndex: number) => (
                            <CollapsibleItem key={questionIndex} index={questionIndex} activeIndex={activeIndices[sectionIndex] ?? null}>
                                <Heading level={3} size={"custom"} className={"text-sm uppercase break-words leading-snug"}>
                                    <button onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                                            className={`${
                                                activeIndices[sectionIndex] === questionIndex ? "about-button-after-active" : ""
                                            } w-full pb-4 text-title text-left font-medium font-(family-name:--font-unbounded) uppercase border-b-2 border-solid border-primary-2 leading-normal relative cursor-pointer after:top-4.5 after:right-0 about-button-after`}
                                    >
                                        { item.question }
                                    </button>
                                </Heading>
                                <p>{item.answer}</p>
                            </CollapsibleItem>
                        )) }
                    </div>
                </div>
            )) }
        </div>
    );
};

export default FaqContent;