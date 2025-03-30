"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ImageModal } from "@/components";

const QuarterGridItem: React.FC<{ url?: string, showImage?: boolean }> = React.memo(({ url, showImage = false }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = useCallback(() => setModalOpen(true), []);
    const closeModal = useCallback(() => setModalOpen(false), []);

    return (
        <div className={"w-1/4 flex-none-auto"}>
            { showImage ? (
                <>
                    <div onClick={openModal} className={"px-2 py-4 flex-center border-[0.5px] border-solid border-primary-2-opc/5 cursor-pointer"}>
                        <Image src={url || ""} alt="Brand" width={200} height={200} className={"max-w-full h-auto"} />
                    </div>
                    <ImageModal url={url || ""} isOpen={isModalOpen} onClose={closeModal} />
                </>
            ) : (
                <Link href={"/"}>
                    <div className={"px-2 py-4 flex-center border-[0.5px] border-solid border-primary-2-opc/5"}>
                        <Image src={url || ""} alt="Brand" width={200} height={200} className={"max-w-full h-auto"} />
                    </div>
                </Link>
            ) }
        </div>
    );
});

export default QuarterGridItem;