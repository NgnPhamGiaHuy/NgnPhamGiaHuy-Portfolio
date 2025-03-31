"use client"

import React from "react";
import { motion } from "framer-motion";

interface CollapsibleItemProps {
    index: number;
    activeIndex: number | null;
}

const CollapsibleItem : React.FC<React.PropsWithChildren<CollapsibleItemProps>> = React.memo(({ index, activeIndex, children }) => {
    return (
        <div className={"border-none bg-transparent overflow-hidden"}>
            { React.Children.toArray(children)[0] }
            <motion.div className={"max-w-210 w-full pt-8 text-base text-text text-justify font-normal font-(family-name:--font-montserrat) leading-loose"}
                        initial={false}
                        animate={{
                            maxHeight: activeIndex === index ? 500 : 0,
                            opacity: activeIndex === index ? 1 : 0,
                            marginBottom: activeIndex === index ? "2.8125rem" : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            >
                { React.Children.toArray(children).slice(1) }
            </motion.div>
        </div>
    );
});

CollapsibleItem.displayName = "CollapsibleItem";

export default CollapsibleItem;