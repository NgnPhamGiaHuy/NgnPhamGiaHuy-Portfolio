import React from "react";
import { motion } from "framer-motion";
import { PortfolioProps } from "@/types";

interface PortfolioPreviewProps {
    portfolios: PortfolioProps[];
    hoveredIndex: number;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ portfolios, hoveredIndex }) => (
    <div className={"mr-1/10 py-12"}>
        <ul>
            { portfolios.map((item: PortfolioProps, index: number) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 1.1, clipPath: "inset(0 100% 0 0)" }}
                    animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 1.1,
                        clipPath: hoveredIndex === index ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                    }}
                    transition={{ duration: 0.8, ease: [0.78, 0.2, 0.21, 0.88] }}
                    className={`${hoveredIndex === index ? "block qodef-animate-image-in" : "hidden"} relative`}
                >
                    <div className="max-xl:min-h-125 max-2xl:min-h-150 min-h-190 h-full top-0 left-0 relative">
                        <img
                            src="/portfolio_demo.png"
                            alt="Portfolio Demo"
                            className="max-xl:max-w-112 max-2xl:max-w-126 max-w-144 max-h-190 h-full border-3 border-t-20 border-r-20 border-solid border-primary-2 rounded-[95rem] object-cover relative z-[15]"
                        />
                    </div>
                </motion.li>
            )) }
        </ul>
    </div>
);

export default PortfolioPreview;