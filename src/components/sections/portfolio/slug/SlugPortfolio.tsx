import React from 'react';

import { SlugPortfolioBanner, SlugPortfolioContent } from "@/components";

const SlugPortfolio: React.FC<{ pathname: string }> = ({ pathname }) => {
    return (
        <div>
            <div className={"section-container"}>
                <div className={"max-w-full max-lg:w-full w-2/5 max-lg:flex-none-auto"}>
                    <SlugPortfolioBanner pathname={pathname} />
                </div>
                <div className={"section-content-large max-lg:flex-none-auto"}>
                    <SlugPortfolioContent />
                </div>
            </div>
        </div>
    );
};

export default SlugPortfolio;