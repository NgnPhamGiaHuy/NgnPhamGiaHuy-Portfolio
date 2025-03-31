"use client"

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowDownLeft } from "react-icons/go";

import { Heading } from "@/components";

const ContactButton : React.FC<{ label: string, position: string, numberLabel: string }> = React.memo(({ label, position, numberLabel }) => {
    const buttonVariants = {
        initial: { backgroundColor: "#F7F6F1" },
        hover: { backgroundColor: "var(--color-primary-1)" }
    };

    const textVariants = {
        initial: { y: 0, opacity: 1 },
        hover: { y: -20, opacity: 0 }
    };

    const contactTextVariants = {
        initial: { y: 20, opacity: 0 },
        hover: { y: -10, opacity: 1 }
    };

    return (
        <Link href={"/contact"}>
            <motion.div
                className={clsx(
                    position,
                    "px-4 py-2 flex-center bg-[#F7F6F1] border-3 max-sm:border-r-5 border-r-8 max-sm:border-b-5 border-b-8 border-solid border-primary-2 rounded-full absolute overflow-hidden z-[1]"
                )}
                initial="initial"
                whileHover="hover"
                variants={buttonVariants}
            >
                <motion.div className={"flex items-center gap-2"} variants={textVariants} transition={{ duration: 0.3 }}>
                    <Heading level={3} size={"custom"} color={"text-primary-1"} className={"max-sm:text-xl text-3xl leading-none"}>
                        { numberLabel }
                    </Heading>
                    <span className={"max-sm:pl-1 pl-2 max-sm:text-xs text-sm text-title font-medium border-l border-solid border-[#D9D9D9] max-sm:leading-4 leading-5"}>
                        { label.split(" ").map((word, index) => (
                            <React.Fragment key={index}>
                                { word }
                                { index < label.split(" ").length - 1 && <br /> }
                            </React.Fragment>
                        )) }
                    </span>
                </motion.div>
                <motion.span
                    className={"top-1/2 text-lg text-white font-medium whitespace-nowrap leading-none absolute"}
                    variants={contactTextVariants}
                    transition={{ duration: 0.4 }}
                >
                    Contact me
                    <GoArrowDownLeft className={"w-4 h-4 -top-2 -right-4 text-white stroke-2 absolute"} />
                </motion.span>
            </motion.div>
        </Link>
    );
});

ContactButton.displayName = "ContactButton";

export default ContactButton;