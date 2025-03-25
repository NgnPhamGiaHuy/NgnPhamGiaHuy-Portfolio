import React from "react";
import { motion } from "framer-motion";

interface PortfolioPreviewProps {
    portfolios: any[];
    hoveredIndex: number;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ portfolios, hoveredIndex }) => (
    <ul>
        { portfolios.map((item, index) => (
            <motion.li
                key={index}
                initial={{ opacity: 0, scale: 1.1, clipPath: "inset(0 100% 0 0)" }}
                animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 1.1,
                    clipPath: hoveredIndex === index ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                }}
                transition={{ duration: 0.8, ease: [0.78, 0.2, 0.21, 0.88] }}
                className={`${hoveredIndex === index ? "active relative qodef-animate-image-in" : "hidden relative"}`}
            >
                <div className="min-h-190 h-full top-0 left-0 absolute"></div>
                <img
                    src="/portfolio_demo.png"
                    alt="Portfolio Demo"
                    className="max-w-144.25 max-h-192.5 h-full border-3 border-t-20 border-r-20 border-solid border-primary-2 rounded-[95rem] object-cover relative z-[1]"
                />
            </motion.li>
        )) }
    </ul>
);

export default PortfolioPreview;