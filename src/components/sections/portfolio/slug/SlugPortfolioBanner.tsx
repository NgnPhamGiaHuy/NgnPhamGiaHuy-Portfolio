import React from 'react';
import Link from "next/link";

const SlugPortfolioBanner: React.FC<{ pathname : string }> = ({ pathname }) => {
    return (
        <div className={"max-lg:min-h-[unset] min-h-screen sticky top-0"}>
            <div className={"max-sm:px-2 max-xl:px-10 px-12 max-xl:py-4 py-5"}>
                <ul className={"flex items-center text-base text-text font-medium font-montserrat gap-4 leading-none"}>
                    <li>
                        <Link href={"/"} className={"text-title"}>
                            Home
                        </Link>
                    </li>
                    <li className={"pl-4 relative dot-before"}>
                        { pathname }
                    </li>
                </ul>
            </div>
            <div className={"max-sm:px-2 max-lg:px-8 max-lg:min-h-[unset] min-h-screen"}>
                <img src="/pexels-chrissiegiann-28982067-1.png" alt="Background" className={"max-w-full w-full max-lg:max-h-[38rem] max-lg:min-h-[unset] min-h-screen h-auto object-cover"}/>
            </div>
        </div>
    );
};

export default SlugPortfolioBanner;