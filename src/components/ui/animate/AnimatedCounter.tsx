"use client"

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
    targetNumber: number;
    duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = React.memo(({ targetNumber, duration = 1.5 }) => {
    const [displayNumber, setDisplayNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayNumber((prev) => {
                if (prev < targetNumber) return prev + 1;
                clearInterval(interval);
                return targetNumber;
            });
        }, (duration * 1000) / targetNumber);

        return () => clearInterval(interval);
    }, [targetNumber, duration]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grow-0">
            { displayNumber }
        </motion.div>
    );
});

export default AnimatedCounter;