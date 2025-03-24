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
        <li className={`w-full flex-center border-r border-solid border-primary-2 relative header-button-after header-button-hover group ${active ? "bg-primary-2" : ""}`}>
            <Link href={link} className={"w-full px-8 py-7 flex-center gap-1 relative"}>
                <span className={`text-sm font-normal tracking-[0.03rem] leading-none ${active ? "text-dark-white" : "text-black group-hover:text-dark-white"} transition-all`}>
                    { title }
                </span>
                <RxArrowTopRight className={`-mt-2 duration-[0.5s] ${active ? "text-primary-1" : "text-black group-hover:text-primary-1"} transition-all`} />
            </Link>
        </li>
    );
};

export default HeaderButton;