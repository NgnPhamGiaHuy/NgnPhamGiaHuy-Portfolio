"use client"

import React from "react";

import { HeaderNav } from "@/constants";
import { HeaderNavProps } from "@/types";
import { HeaderButton } from "@/components";

interface HeaderProps {
    activeLink: string;
}

const Header : React.FC<HeaderProps> = ({ activeLink }) => {
    return (
        <div className={"w-full left-0 bottom-0 border-t border-solid border-primary-2 bg-white fixed z-[999]"}>
            <ul className={"w-full flex-center list-none"}>
                { HeaderNav.map((item: HeaderNavProps, index) => (
                    <HeaderButton key={index} link={item.link} title={item.title} active={item.link === activeLink} />
                )) }
            </ul>
        </div>
    );
};

export default Header;