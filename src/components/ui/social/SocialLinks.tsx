import React from 'react';
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";

const SocialLinks : React.FC = () => {
    return (
        <ul className={"flex items-center max-sm:gap-5 max-xl:gap-6 gap-8 leading-none"}>
            {[1, 2, 3].map((value, index) => (
                <li key={index}>
                    <Link href={"/src/public"}>
                        <FaFacebookF className={"w-4 h-4 text-base text-text hover:text-primary-1 transition-all"}/>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialLinks;