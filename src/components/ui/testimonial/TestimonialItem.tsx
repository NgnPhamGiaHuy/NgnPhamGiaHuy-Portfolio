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
        <li className={clsx(background, borderColor, "max-sm:mb-8 max-lg:mb-10 mb-12 max-2xl:px-4 px-8 max-sm:py-8 py-16 flex-between max-sm:flex-col max-sm:gap-2 max-2xl-mid:gap-4 gap-6 rounded-xl border-r-3 border-b-3 border-solid relative")}>
            <div className="text-center">
                <div className="mb-2 inline-block" style={{ maskImage: "url(/testimonial-author-img-shape.png)", maskSize: "cover", maskRepeat: "no-repeat" }}>
                    <img src={authorImage} alt={authorName} className="max-w-24 w-24 max-h-24 h-24" />
                </div>
                <div>
                    <Heading level={4} size={"custom"} fontWeight={"medium"} className={"max-md:text-sm max-2xl:text-base text-xl leading-snug"}>
                        {authorName}
                    </Heading>
                    <span className="max-2xl:text-sm text-base font-normal leading-none">{authorRole}</span>
                </div>
            </div>
            <div className="max-w-132 w-full">
                <Paragraph className={clsx(textColor, "max-md:text-sm line-clamp-5")}>{children}</Paragraph>
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

TestimonialItem.displayName = "TestimonialItem";

export default TestimonialItem;
