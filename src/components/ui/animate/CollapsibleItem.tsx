"use client"

import React from "react";
import { motion } from "framer-motion";

interface CollapsibleItemProps {
    title: string;
    index: number;
    activeIndex: number;
    children: React.ReactNode;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CollapsibleItem : React.FC<CollapsibleItemProps> = ({ title, index, children, activeIndex, setActiveIndex }) => {
    return (
        <div className={"p-0 border-none bg-transparent overflow-hidden"}>
            <h2 className={"text-5xl text-title font-bold break-words leading-[1.3]"}>
                <button onClick={() => setActiveIndex(index)} className={`w-full pb-5 text-lg text-title text-left font-medium font-(family-name:--font-unbounded) uppercase border-b-2 border-solid border-primary-2 leading-[1.4] relative cursor-pointer about-button-after ${activeIndex === index ? 'about-button-after-active' : ''}`}>
                    { title }
                </button>
            </h2>
            <div>
                <motion.div initial={false}
                            animate={{ maxHeight: activeIndex === index ? 500 : 0, opacity: activeIndex === index ? 1 : 0, marginBottom: activeIndex === index ? "2.8125rem" : 0, }}
                            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], }}
                            className={"max-w-210 w-full pt-7.5 text-base text-text text-justify font-normal font-(family-name:--font-montserrat) leading-[1.9]"}>
                    { children }
                </motion.div>
            </div>
        </div>
    );
};

export default CollapsibleItem;