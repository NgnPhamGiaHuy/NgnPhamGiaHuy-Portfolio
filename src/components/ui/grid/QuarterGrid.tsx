import React from "react";

import { TimelineEntry } from "@/types";
import { QuarterGridItem } from "@/components";

interface QuarterGridProps {
    list: TimelineEntry[];
}

const QuarterGrid : React.FC<QuarterGridProps> = ({ list }) => {
    return (
        <div className={"border-[0.5px] border-solid border-primary-2-opc/5"}>
            <div className={"flex flex-wrap justify-start"}>
                { list.map((item, index) => (
                    <QuarterGridItem key={index} url={item.url} showImage={true}/>
                )) }
            </div>
        </div>
    );
};

export default QuarterGrid;