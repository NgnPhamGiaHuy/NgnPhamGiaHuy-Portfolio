import clsx from "clsx";
import Link from "next/link";
import React, { useMemo } from "react";

import { HEADER_NAV } from "@/constants";
import { HeaderNavProps } from "@/types";

const SidebarMenuList: React.FC<{ activeLink: string }> = ({ activeLink }) => {
    const navItems = useMemo(
        () =>
            HEADER_NAV.map((item: HeaderNavProps, index: number) => (
                <li key={index} className={"h-full relative"}>
                    <Link
                        href={item.link}
                        className={clsx(
                            item.link === activeLink ? "text-primary-1" : "text-title",
                            "max-sm:px-5 px-6 max-sm:py-4 py-6 max-sm:text-xl text-2xl font-semibold border-b border-solid border-border uppercase block leading-none duration-300 transition-all"
                        )}
                    >
                        { item.title }
                    </Link>
                </li>
            )),
        [activeLink]
    );

    return (
        <div className={"max-xl:mr-0 max-2xl:mr-8 mr-12 border-l border-solid border-border"}>
            <ul className={"border-t border-r border-solid border-border"}>
                { navItems }
            </ul>
        </div>
    );
};

SidebarMenuList.displayName = "SidebarMenuList";

export default SidebarMenuList;