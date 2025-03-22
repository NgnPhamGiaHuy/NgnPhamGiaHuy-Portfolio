"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowDownLeft } from "react-icons/go";

interface ContactButtonProps {
    label: string;
    position: string;
    numberLabel: string;
}

const ContactButton : React.FC<ContactButtonProps> = ({ label, position, numberLabel }) => {
    return (
        <Link href={"/contact"}>
            <motion.div className={`px-3.5 py-2.5 flex-center bg-[#F7F6F1] border-3 border-r-8 border-b-8 border-solid border-primary-2 rounded-full absolute overflow-hidden z-[1] ${position}`} initial="initial" whileHover="hover" variants={{ initial: { backgroundColor: "#F7F6F1" }, hover: { backgroundColor: "var(--color-primary-1)" } }}>
                <motion.div className={"flex items-center gap-2.5"} variants={{ initial: { y: 0, opacity: 1 }, hover: { y: -20, opacity: 0 } }} transition={{ duration: 0.3 }}>
                    <h3 className={"text-3xl text-primary-1 font-bold leading-none"}>
                        { numberLabel }
                    </h3>
                    <span className={"pl-2.5 text-sm font-medium border-l border-solid border-[#D9D9D9] leading-5"}>
                        { label.split(" ").map((word, index) => (
                            <React.Fragment key={index}>
                                { word }
                                { index < label.split(" ").length - 1 && <br /> }
                            </React.Fragment>
                        )) }
                    </span>
                </motion.div>
                <motion.span className={"top-1/2 text-lg text-white font-medium whitespace-nowrap leading-none absolute"} variants={{ initial: { y: 20, opacity: 0 }, hover: { y: -10, opacity: 1 } }} transition={{ duration: 0.4 }}>
                    Contact me
                    <GoArrowDownLeft className={"w-3 h-3 -top-2 -right-4 text-white stroke-2 absolute"} />
                </motion.span>
            </motion.div>
        </Link>
    );
};

export default ContactButton;