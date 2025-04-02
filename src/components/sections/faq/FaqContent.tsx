"use client";

import React, { useState } from "react";
import { FaLayerGroup } from "react-icons/fa6";

import { FAQProps, FAQSectionProps } from "@/types";
import { CollapsibleItem, Heading, Paragraph } from "@/components";
import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";

const MemoizedCollapsibleItem = React.memo(CollapsibleItem);

const FaqContent: React.FC = () => {
    const { faqs } = PERSONAL_IDENTIFIABLE_INFORMATION;

    const [activeIndices, setActiveIndices] = useState<{ [key: number]: number | null }>({});

    const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
        setActiveIndices((prev) => {
            if (prev[sectionIndex] === questionIndex) {
                const updatedState = { ...prev };
                delete updatedState[sectionIndex]; 
                return updatedState;
            }
            return { ...prev, [sectionIndex]: questionIndex };
        });
    };

    return (
        <div className="content-padding-responsive">
            {faqs.map((faq: FAQSectionProps, sectionIndex: number) => (
                <div key={sectionIndex}>
                    <div className={`${sectionIndex !== 0 && "max-lg:mt-16 max-xl:mt-20 mt-24"} max-md:mb-8 max-xl:mb-10 max-2xl:mb-12 mb-14 flex items-center gap-4`}>
                        <Heading level={2} size="custom" fontWeight="medium" className="text-2xl leading-tight">
                            {faq.title}
                        </Heading>
                        <FaLayerGroup className="size-6 text-primary-1" />
                    </div>
                    <div>
                        {faq.content.map((item: FAQProps, questionIndex: number, array) => (
                            <MemoizedCollapsibleItem key={`${sectionIndex}-${item.question}`} index={questionIndex} activeIndex={activeIndices[sectionIndex] ?? null} isLastIndex={questionIndex === array.length - 1}>
                                <Heading level={3} size="custom" className="text-sm uppercase break-words leading-snug">
                                    <button
                                        onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                                        className={`${
                                            activeIndices[sectionIndex] === questionIndex ? "about-button-after-active" : ""
                                        } about-button max-md:after:top-0 after:top-4.5 after:right-0 about-button-after`}
                                    >
                                        {item.question}
                                    </button>
                                </Heading>
                                <Paragraph size="custom" className="max-sm:text-sm text-base leading-[1.8]">
                                    {item.answer}
                                </Paragraph>
                            </MemoizedCollapsibleItem>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqContent;