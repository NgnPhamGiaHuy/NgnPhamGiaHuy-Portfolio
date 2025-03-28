"use client"

import clsx from "clsx";
import Link from "next/link";
import React, { useMemo } from "react";
import { RxArrowTopRight } from "react-icons/rx";

interface HeaderButtonProps {
    link: string;
    title: string;
    active?: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = React.memo(({ link, title, active = false }) => {
    const listItemClass = useMemo(() => 
        clsx("w-full flex-center border-r border-solid border-primary-2 relative header-button-after header-button-hover group", {
            "bg-primary-2": active
        }), [active]);

    const textClass = useMemo(() => 
        clsx("text-sm font-normal tracking-wide leading-none transition-all", {
            "text-dark-white": active,
            "text-black group-hover:text-dark-white": !active
        }), [active]);

    const iconClass = useMemo(() => 
        clsx("-mt-2 duration-500 transition-all", {
            "text-primary-1": active,
            "text-black group-hover:text-primary-1": !active
        }), [active]);

    return (
        <li className={listItemClass}>
            <Link href={link} className={"w-full px-8 py-6 flex-center gap-1 relative"}>
                <span className={textClass}>{title}</span>
                <RxArrowTopRight className={iconClass} />
            </Link>
        </li>
    );
});

export default HeaderButton;