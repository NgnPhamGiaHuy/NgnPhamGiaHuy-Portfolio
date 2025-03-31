"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { PortfolioProps } from "@/types";

interface PortfolioItemProps {
    item: PortfolioProps;
    index: number;
    hoveredIndex: number;
    setHoveredIndex: (index: number) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = React.memo(({ item, index, hoveredIndex, setHoveredIndex }) => {
    return (
        <motion.li
            key={index}
            initial={{ backgroundSize: "0% 100%" }}
            animate={{
                backgroundSize: hoveredIndex === index ? "100% 100%" : "0% 100%",
                transition: { duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
            style={{
                backgroundImage: "linear-gradient(to right, var(--color-primary-1), var(--color-primary-1))",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
            }}
            className="max-md:pr-5 max-md:pl-2 max-md:py-6 max-lg:py-8 max-2xl:py-9 py-10 max-2xl:px-5 px-6 border border-t-0 border-l-0 border-solid border-primary-1/50 rounded-r-[12.5rem]"
        >
            <Link href={"/"}>
                <motion.span
                    initial={{ backgroundSize: "0% 100%" }}
                    animate={{
                        backgroundSize: hoveredIndex === index ? "100% 100%" : "0% 100%",
                        transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                    style={{
                        backgroundImage: hoveredIndex === index
                            ? "linear-gradient(to right, #fff, #fff)"
                            : "linear-gradient(to right, var(--color-primary-1), var(--color-primary-1))",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: hoveredIndex === index ? "transparent" : "var(--color-primary-1)",
                    }}
                    className="mb-1 inline-flex items-center gap-2 text-sm font-normal leading-none"
                >
                    {item.icon(index, hoveredIndex)}
                    {item.category}
                </motion.span>
            </Link>
            <motion.h2
                initial={{ backgroundSize: "0% 100%" }}
                animate={{
                    backgroundSize: hoveredIndex === index ? "100% 100%" : "0% 100%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                }}
                style={{
                    backgroundImage: hoveredIndex === index
                        ? "linear-gradient(to right, #fff, #fff)"
                        : "linear-gradient(to right, var(--color-title), var(--color-title))",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: hoveredIndex === index ? "transparent" : "initial",
                }}
                className="max-sm:text-xl max-md:text-2xl max-xl:text-3xl text-4xl font-medium uppercase leading-tight"
            >
                <Link href={"/"}>
                    { item.title }
                </Link>
            </motion.h2>
        </motion.li>
    );
});

PortfolioItem.displayName = "PortfolioItem";

export default PortfolioItem;