"use client"

import React, { useMemo } from "react";

import { HEADER_NAV } from "@/constants";
import { HeaderNavProps } from "@/types";
import { HeaderButton } from "@/components";

interface HeaderProps {
    activeLink: string;
}

const Header: React.FC<HeaderProps> = React.memo(({ activeLink }) => {
    const navItems = useMemo(() =>
        HEADER_NAV.map((item: HeaderNavProps) => (
            <HeaderButton key={item.link} link={item.link} title={item.title} active={item.link === activeLink} />
        )), [activeLink]);

    return (
        <div className={"w-full left-0 bottom-0 border-t border-solid border-primary-2 bg-white fixed z-[999]"}>
            <ul className={"w-full flex-center list-none"}>{navItems}</ul>
        </div>
    );
});

export default Header;