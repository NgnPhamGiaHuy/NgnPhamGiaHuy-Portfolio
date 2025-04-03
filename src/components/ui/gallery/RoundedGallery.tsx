import React from 'react';
import { PortfolioWrapper } from "@/components";

const RoundedGallery: React.FC = () => {
    return (
        <PortfolioWrapper flexDirection={"flex-row"}>
            <div className={"w-3/5 flex flex-col"}>
                <img src="/portfolio-details-img2-1.jpg" alt="Imagine" className={"h-94 rounded-l-[3.125rem]"}/>
            </div>
            <div className={"w-2/5 flex flex-col gap-6"}>
                <div>
                    <img src="/portfolio-details-img3.jpg" alt="Image" className={"h-44 rounded-tr-[3.125rem] object-cover object-center"}/>
                </div>
                <div>
                    <img src="/portfolio-details-img3.jpg" alt="Image" className={"h-44 rounded-br-[3.125rem] object-cover object-center"}/>
                </div>
            </div>
        </PortfolioWrapper>
    );
};

export default RoundedGallery;