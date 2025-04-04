import React from 'react';
import Link from "next/link";

const Tags : React.FC = () => {
    return (
        <ul className={"flex flex-wrap items-center gap-4"}>
            { [1, 2, 3].map((value, index) => (
                <li key={index}>
                    <Link href={"/src/public"} className={"px-4 py-2 max-sm:text-xs text-sm text-primary-1 font-medium font-montserrat rounded-md bg-primary-1/20 leading-none inline-block"}>
                        Visual Design
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Tags;