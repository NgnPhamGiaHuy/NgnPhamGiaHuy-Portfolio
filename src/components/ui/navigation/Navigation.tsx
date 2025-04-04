import React from 'react';
import Link from "next/link";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";

const Navigation : React.FC = () => {
    return (
        <div className={"max-sm:py-3 mt-12 py-4 flex-between flex-wrap max-sm:gap-4 gap-5 border-t border-b border-primary-2/10"}>
            <Link href={"/src/public"} className={"flex items-center max-sm:gap-1 gap-2 max-sm:text-xs text-sm text-title font-medium font-montserrat uppercase leading-none hover:text-primary-1 transition-all"}>
                <HiOutlineArrowLongLeft className={"max-sm:w-6 w-8 h-auto text-primary-1"}/>
                Previous Project
            </Link>
            <Link href={"/src/public"} className={"flex items-center max-sm:gap-1 gap-2 max-sm:text-xs text-sm text-title font-medium font-montserrat uppercase leading-none hover:text-primary-1 transition-all"}>
                Next Project
                <HiOutlineArrowLongRight className={"max-sm:w-6 w-8 h-auto text-primary-1"}/>
            </Link>
        </div>
    );
};

export default Navigation;