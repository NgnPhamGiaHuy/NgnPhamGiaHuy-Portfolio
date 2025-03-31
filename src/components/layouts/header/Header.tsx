"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { PiSquaresFourBold } from "react-icons/pi";

import { HEADER_NAV } from "@/constants";
import { HeaderNavProps } from "@/types";
import { HeaderButton } from "@/components";

const Header: React.FC<{ activeLink: string; onClose: () => void }> = React.memo(({ activeLink, onClose }) => {
    const navItems = useMemo(
        () =>
            HEADER_NAV.map((item: HeaderNavProps, index: number) => (
                <HeaderButton key={index} link={item.link} title={item.title} active={item.link === activeLink} />
            )),
        [activeLink] 
    );

    return (
        <div className={"w-full max-xl:px-5 max-xl:py-4 left-0 bottom-0 max-xl:flex-between border-t border-solid border-primary-2 bg-white fixed z-[999]"}>
            <Link href={"/"} className={"max-xl:block hidden"}>
                <div>
                    <img src={"/logo.svg"} alt={"logo"} className={"max-w-full h-auto"} />
                </div>
            </Link>
            <ul className={"w-full max-xl:hidden flex-center list-none"}>{navItems}</ul>
            <div className={"max-xl:flex max-xl:items-center max-xl:gap-5 hidden"}>
                <div className={"flex-center text-title cursor-pointer transition-all duration-500 hover:text-primary-1 z-[1000]"}>
                    <RiMoonClearLine className={"w-6 h-6"} />
                </div>
                <div onClick={onClose} className={"flex-center text-title cursor-pointer transition-all duration-500 hover:text-primary-1 z-[1000]"}>
                    <PiSquaresFourBold className={"w-6 h-6"} />
                </div>
            </div>
        </div>
    );
}, (prevProps, nextProps) => prevProps.activeLink === nextProps.activeLink); 

Header.displayName = "Header";

export default Header;