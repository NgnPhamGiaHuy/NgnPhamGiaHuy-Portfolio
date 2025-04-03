import React from 'react';

import { SlugPortfolioBanner, SlugPortfolioContent } from "@/components";

const SlugPortfolio: React.FC = () => {
    return (
        <div>
            <div className={"section-container"}>
                <div className={"max-w-full max-lg:w-full w-2/5 max-lg:flex-none-auto"}>
                    <SlugPortfolioBanner />
                </div>
                <div className={"section-content-large max-lg:flex-none-auto"}>
                    <SlugPortfolioContent />
                </div>
            </div>
        </div>
    );
};

export default SlugPortfolio;