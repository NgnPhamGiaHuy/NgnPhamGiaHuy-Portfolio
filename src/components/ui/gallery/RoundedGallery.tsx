import React from 'react';
import { PortfolioWrapper } from "@/components";

const RoundedGallery: React.FC = () => {
    return (
        <PortfolioWrapper flexDirection={"flex-row"} className={"max-md:flex-wrap"}>
            <div className={"max-sm:w-full max-md:w-1/2 w-3/5 flex flex-col max-md:flex-wrap"}>
                <img src="/portfolio-details-img2-1.jpg" alt="Imagine" className={"max-sm:h-full h-94 max-sm:rounded-2xl rounded-l-[3.125rem]"}/>
            </div>
            <div className={"max-sm:w-full w-2/5 flex flex-col max-md:flex-wrap gap-6"}>
                <div>
                    <img src="/portfolio-details-img3.jpg" alt="Image" className={"max-sm:h-full h-44 max-sm:rounded-2xl rounded-tr-[3.125rem] object-cover object-center"}/>
                </div>
                <div>
                    <img src="/portfolio-details-img3.jpg" alt="Image" className={"max-sm:h-full h-44 max-sm:rounded-2xl rounded-br-[3.125rem] object-cover object-center"}/>
                </div>
            </div>
        </PortfolioWrapper>
    );
};

export default RoundedGallery;