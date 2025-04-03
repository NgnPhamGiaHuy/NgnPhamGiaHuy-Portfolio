import React from 'react';
import Link from "next/link";

const SlugPortfolioBanner: React.FC = () => {
    return (
        <div className={"min-h-screen sticky top-0"}>
            <div className={"py-4 px-12"}>
                <ul className={"flex items-center text-base text-text font-medium font-montserrat gap-4 leading-none"}>
                    <li>
                        <Link href={"/src/public"} className={"text-title"}>
                            Home
                        </Link>
                    </li>
                    <li className={"pl-4 relative dot-before"}>
                        Software Agency
                    </li>
                </ul>
            </div>
            <div className={"min-h-screen"}>
                <img src="/pexels-chrissiegiann-28982067-1.png" alt="Background" className={"max-w-full w-full min-h-screen h-auto object-cover"}/>
            </div>
        </div>
    );
};

export default SlugPortfolioBanner;