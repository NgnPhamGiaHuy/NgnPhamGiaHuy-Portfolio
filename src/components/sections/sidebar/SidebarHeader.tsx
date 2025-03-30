"use client"

import React from 'react';
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

const SidebarHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className={"mb-16 py-6 border-b border-solid border-border"}>
            <div className={"max-md:max-w-135 max-lg:max-w-180 max-xl:max-w-240 max-2xl:max-w-285 max-w-330 mx-auto px-3 flex-between"}>
                <div>
                    <Link href={"/"}>
                        <div>
                            <img src={"/logo.svg"} alt={"logo"} className={"max-w-full h-auto"} />
                        </div>
                    </Link>
                </div>
                <div onClick={onClose} className={"max-sm:w-8 w-10 max-sm:h-8 h-10 flex-center rounded-full border border-solid border-primary-2 cursor-pointer"}>
                    <FaXmark className={"max-sm:w-4 w-7 max-sm:h-4 h-7"}/>
                </div>
            </div>
        </div>
    );
};

export default SidebarHeader;