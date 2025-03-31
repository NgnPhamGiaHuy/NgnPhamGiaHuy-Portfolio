import React from "react";

import { TimelineEntry } from "@/types";
import { QuarterGridItem } from "@/components";

interface QuarterGridProps {
    list: TimelineEntry[];
}

const QuarterGrid: React.FC<QuarterGridProps> = React.memo(({ list }) => {
    return (
        <div>
            <div className={"flex flex-wrap justify-start"}>
                { list.map((item: TimelineEntry, index: number) => (
                    <QuarterGridItem key={index} url={item.url} showImage={true}/>
                )) }
            </div>
        </div>
    );
});

QuarterGrid.displayName = "QuarterGrid";

export default QuarterGrid;