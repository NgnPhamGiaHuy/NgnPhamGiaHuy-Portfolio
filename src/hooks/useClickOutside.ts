"use client";

import { useEffect } from "react";

const useClickOutside = (ref: React.RefObject<HTMLDivElement | null>, isOpen: boolean, onClose: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose, ref]);
};

export default useClickOutside;