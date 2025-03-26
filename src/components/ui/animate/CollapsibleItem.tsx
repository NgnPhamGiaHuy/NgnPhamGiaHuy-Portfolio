"use client"

import React from "react";
import { motion } from "framer-motion";

import { Heading } from "@/components";

interface CollapsibleItemProps {
    title: string;
    index: number;
    activeIndex: number;
    children: React.ReactNode;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CollapsibleItem : React.FC<CollapsibleItemProps> = ({ title, index, children, activeIndex, setActiveIndex }) => {
    return (
        <div className={"border-none bg-transparent overflow-hidden"}>
            <Heading level={4} size={"custom"} className={"text-5xl break-words leading-snug"}>
                <button onClick={() => setActiveIndex(index)} className={`${activeIndex === index ? "about-button-after-active" : ""} w-full pb-4 text-lg text-title text-left font-medium font-(family-name:--font-unbounded) uppercase border-b-2 border-solid border-primary-2 leading-normal relative cursor-pointer about-button-after`}>
                    { title }
                </button>     
            </Heading>
            <div>
                <motion.div initial={false}
                            animate={{ maxHeight: activeIndex === index ? 500 : 0, opacity: activeIndex === index ? 1 : 0, marginBottom: activeIndex === index ? "2.8125rem" : 0, }}
                            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], }}
                            className={"max-w-210 w-full pt-8 text-base text-text text-justify font-normal font-(family-name:--font-montserrat) leading-loose"}>
                    { children }
                </motion.div>
            </div>
        </div>
    );
};

export default CollapsibleItem;