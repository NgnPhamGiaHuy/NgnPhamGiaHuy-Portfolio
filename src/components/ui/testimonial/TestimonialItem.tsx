"use client";

import clsx from "clsx";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

import { Heading, Paragraph } from "@/components";

interface TestimonialItemProps {
    authorName: string;
    authorRole: string;
    authorImage?: string;
    textColor?: string;
    background?: string;
    borderColor?: string;
}

const TestimonialItem: React.FC<React.PropsWithChildren<TestimonialItemProps>> = React.memo(({ authorName, authorRole, authorImage, background = "bg-dark-white", borderColor = "border-primary-2", textColor = "text-text", children }) => {
    return (
        <li className={clsx(background, borderColor, " mb-12 px-8 py-16 flex-between gap-6 rounded-xl border-r-3 border-b-3 border-solid relative")}>
            <div className="text-center">
                <div className="mb-2 inline-block" style={{ maskImage: "url(/testimonial-author-img-shape.png)", maskSize: "cover", maskRepeat: "no-repeat" }}>
                    <img src={authorImage} alt={authorName} className="max-w-24 w-24 max-h-24 h-24" />
                </div>
                <div>
                    <Heading level={4} size={"custom"} fontWeight={"medium"} className={"text-xl leading-snug"}>
                        {authorName}
                    </Heading>
                    <span className="text-base font-normal leading-none">{authorRole}</span>
                </div>
            </div>
            <div className="max-w-132 w-full">
                <Paragraph className={clsx(textColor, "line-clamp-5")}>{children}</Paragraph>
            </div>
            <div className="top-4 left-4 absolute opacity-25">
                <ImQuotesLeft className="w-12 h-auto fill-transparent stroke-primary-1/40 stroke-1 -rotate-10 overflow-visible" />
            </div>
            <div className="bottom-2 right-4 absolute opacity-25">
                <ImQuotesLeft className="w-12 h-auto fill-transparent stroke-primary-1/40 stroke-1 -rotate-5 rotate-y-180 overflow-visible" />
            </div>
        </li>
    );
});

export default TestimonialItem;
