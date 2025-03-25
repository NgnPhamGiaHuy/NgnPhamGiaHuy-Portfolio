"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PortfolioItemProps {
    item: any;
    index: number;
    hoveredIndex: number;
    setHoveredIndex: (index: number) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index, hoveredIndex, setHoveredIndex }) => {
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
            className="py-10.5 px-6 border border-t-0 border-l-0 border-solid border-primary-1/50 rounded-r-[12.5rem]"
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
                className="text-4xl font-medium uppercase leading-[1.2]"
            >
                <Link href={"/"}>
                    { item.title }
                </Link>
            </motion.h2>
        </motion.li>
    );
};

export default PortfolioItem;