import clsx from "clsx";
import React from "react";
import { motion } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi";

import { CONTACTS } from "@/constants";
import { ContactItemProps } from "@/types";
import { ContactItem, Heading, SidebarHeader, SidebarMenuList, SocialCircleLinks } from "@/components";

const SideBarMenu: React.FC<{ activeLink: string, isOpen: boolean, onClose: () => void }> = ({ activeLink, isOpen, onClose }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    };
    
    return (
        <motion.div initial="hidden"
                    animate={isOpen ? "show" : "hidden"}
                    variants={containerVariants}
                    className={clsx({ "hidden" : !isOpen }, "w-full h-full pb-16 top-0 left-0 fixed bg-dark-white overflow-y-auto z-[9999]")}>
            <SidebarHeader onClose={onClose} />
            <div className={"max-md:max-w-135 max-lg:max-w-180 max-xl:max-w-240 max-2xl:max-w-285 max-w-330 px-3 mx-auto"}>
                <div className={"flex flex-wrap -mx-3 max-lg:-mt-12 -mt-6"}>
                    <motion.div variants={isOpen ? itemVariants : {}} className={"max-w-full max-lg:w-full w-2/3 max-lg:mt-12 mt-6 px-3 flex-none-auto"}>
                        <SidebarMenuList activeLink={activeLink} />
                    </motion.div>
                    <motion.div variants={isOpen ? itemVariants : {}} className={"max-w-full max-lg:w-full w-1/3 max-lg:mt-12 mt-6 px-3 flex flex-col flex-none-auto items-center"}>
                        <div className={"w-full mb-12"}>
                            <Heading level={3} size={"custom"} fontWeight={"semibold"} className={"w-full max-w-full max-md:mb-6 max-lg:mb-8 mb-10 max-md:text-2xl text-3xl flex items-center"}>
                                Get in Touch
                                <FiArrowUpRight className={"w-4 h-4 ml-1"}/>
                            </Heading>
                            <ul>
                                { CONTACTS.map((contact: ContactItemProps, index, array) => (
                                    <ContactItem key={index} index={index} arrayIndex={array.length} contact={contact}/>
                                )) }
                            </ul>
                        </div>
                        <div className={"w-full"}>
                            <Heading level={3} size={"custom"} className={"w-full mb-8 pb-2 flex items-center max-sm:text-base text-lg border-b border-solid border-border"}>
                                Social Link
                                <FiArrowUpRight className={"w-4 h-4 ml-1"}/>
                            </Heading>
                            <SocialCircleLinks/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SideBarMenu;