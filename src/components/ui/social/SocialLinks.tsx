import React from 'react';
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";

const SocialLinks : React.FC = () => {
    return (
        <ul className={"flex items-center gap-8 leading-none"}>
            {[1, 2, 3].map((value, index) => (
                <li key={index}>
                    <Link href={"/src/public"}>
                        <FaFacebookF className={"w-3 h-3 text-text hover:text-primary-1 transition-all"}/>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialLinks;