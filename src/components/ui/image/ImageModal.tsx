"use client"

import React, { Fragment, useRef } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { useClickOutside } from "@/hooks";

interface ImageModalProps {
    url: string;
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = React.memo(({ isOpen, onClose, url }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, isOpen, onClose);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog as="div" className="inset-0 flex-center bg-black/30 fixed z-10" onClose={onClose} />
                    </Transition.Child>
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child as={Fragment} enter="transition-transform transition-opacity duration-500 ease-out" enterFrom="opacity-0 scale-90" enterTo="opacity-100 scale-100" leave="transition-transform transition-opacity duration-300 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-90">
                        <div ref={modalRef} className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                            <button onClick={onClose} className="absolute top-3 right-3 text-2xl font-bold text-title cursor-pointer leading-none">✕</button>
                            <Image src={url || ""} alt="Brand Enlarged" width={850} height={850} className="max-w-full rounded-lg h-auto" />
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
});

ImageModal.displayName = "ImageModal";

export default ImageModal;