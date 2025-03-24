"use client";

import React from "react";
import { ImQuotesLeft } from "react-icons/im";

import { Paragraph } from "@/components";

interface TestimonialItemProps {
    authorName: string;
    authorRole: string;
    authorImage?: string;
    textColor?: string;
    background?: string;
    borderColor?: string;
    children: React.ReactNode;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ authorName, authorRole, authorImage, background = "bg-dark-white", borderColor = "border-primary-2", textColor = "text-text", children }) => {
    return (
        <li className={`mb-11.25 px-10 py-16.25 flex-between gap-5 ${background} rounded-[10px] border-r-3 border-b-3 border-solid ${borderColor} relative`}>
            <div className="text-center">
                <div className="mb-2.5 inline-block" style={{ maskImage: "url(/testimonial-author-img-shape.png)", maskSize: "cover", maskRepeat: "no-repeat" }}>
                    <img src={authorImage} alt={authorName} className="max-w-23.75 w-23.75 max-h-23.75 h-23.75" />
                </div>
                <div>
                    <h4 className="text-xl text-title font-medium leading-[1.3]">{authorName}</h4>
                    <span className="text-base font-normal leading-none">{authorRole}</span>
                </div>
            </div>
            <div className="max-w-132.5 w-full">
                <Paragraph className={`line-clamp-5 ${textColor}`}>{children}</Paragraph>
            </div>
            <div className="top-5 left-5 absolute opacity-25">
                <ImQuotesLeft className="w-13.5 h-auto fill-transparent stroke-primary-1/40 stroke-1 -rotate-10 overflow-visible" />
            </div>
            <div className="bottom-2.5 right-5 absolute opacity-25">
                <ImQuotesLeft className="w-13.5 h-auto fill-transparent stroke-primary-1/40 stroke-1 -rotate-5 rotate-y-180 overflow-visible" />
            </div>
        </li>
    );
};

export default TestimonialItem;
