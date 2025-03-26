"use client"

import React from "react";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

interface HeaderButtonProps {
    link: string;
    title: string;
    active?: boolean;
}

const HeaderButton : React.FC<HeaderButtonProps> = ({ link, title, active = false }) => {
    return (
        <li className={`${active ? "bg-primary-2" : ""} w-full flex-center border-r border-solid border-primary-2 relative header-button-after header-button-hover group`}>
            <Link href={link} className={"w-full px-8 py-6 flex-center gap-1 relative"}>
                <span className={`${active ? "text-dark-white" : "text-black group-hover:text-dark-white"} text-sm font-normal tracking-wide leading-none transition-all`}>
                    { title }
                </span>
                <RxArrowTopRight className={`${active ? "text-primary-1" : "text-black group-hover:text-primary-1"} -mt-2 duration-500 transition-all`} />
            </Link>
        </li>
    );
};

export default HeaderButton;