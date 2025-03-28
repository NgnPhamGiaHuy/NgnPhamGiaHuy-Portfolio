"use client"

import Link from "next/link";
import React, { useMemo } from "react";
import { RiMoonClearLine } from "react-icons/ri";

import { SocialProfilesProps } from "@/types";

interface SideBarProps {
    list: SocialProfilesProps[];
}

const SideBar: React.FC<SideBarProps> = React.memo(({ list }) => {
    const socialLinks = useMemo(() =>
        list.map((item: SocialProfilesProps) => (
            <li key={item.url} className={"px-8 py-4 flex-center border-t border-solid border-[rgba(110, 110, 110, 0.2)]"}>
                <Link href={item.url}>
                    <span className={"text-lg text-text leading-none duration-500 transition-all hover:text-primary-1"}>
                        {item.icon}
                    </span>
                </Link>
            </li>
        )), [list]);

    return (
        <div className={"max-w-20 w-full h-screen pb-16 top-0 left-0 flex flex-col justify-between border-r border-solid border-primary-2 fixed"}>
            <Link href={"/"}>
                <div className={"px-2 py-8"}>
                    <img src={"/logo.svg"} alt={"logo"} className={"max-w-full h-auto"} />
                </div>
            </Link>
            <div className={"w-10 h-8 flex-center border border-l-0 border-solid border-primary-2 cursor-pointer"}>
                <RiMoonClearLine className={"w-6 h-6"} />
            </div>
            <ul>{socialLinks}</ul>
        </div>
    );
}, (prevProps, nextProps) => JSON.stringify(prevProps.list) === JSON.stringify(nextProps.list));

export default SideBar;