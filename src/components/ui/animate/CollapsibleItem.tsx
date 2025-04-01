"use client";

import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface CollapsibleItemProps {
    index: number;
    isLastIndex: boolean;
    activeIndex: number | null;
}

const CollapsibleItem: React.FC<React.PropsWithChildren<CollapsibleItemProps>> = React.memo(
    ({ index, activeIndex, isLastIndex, children }) => {
        const contentRef = useRef<HTMLDivElement>(null);
        const [contentHeight, setContentHeight] = useState(0);

        useEffect(() => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        }, [children, activeIndex]);

        const contentVariants: Variants = {
            collapsed: {
                maxHeight: 0,
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
            },
            expanded: {
                maxHeight: contentHeight,
                opacity: 1,
                transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] },
            },
        };

        return (
            <div className={clsx({ "mb-[2.8125rem]": !isLastIndex && activeIndex === index }, "border-none bg-transparent overflow-hidden")}>
                { React.Children.toArray(children)[0] }
                <motion.div ref={contentRef} className="max-w-210 w-full pt-8 text-base text-text text-justify font-normal font-montserrat leading-loose overflow-hidden" initial="collapsed" animate={activeIndex === index ? "expanded" : "collapsed"} variants={contentVariants}>
                    { React.Children.toArray(children).slice(1) }
                </motion.div>
            </div>
        );
    }
);

CollapsibleItem.displayName = "CollapsibleItem";

export default CollapsibleItem;