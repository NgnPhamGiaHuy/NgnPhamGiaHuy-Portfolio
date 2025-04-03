import React from 'react';

import { Navigation, Paragraph, PortfolioHeader, PortfolioOverview, PortfolioProcess, PortfolioWrapper, RoundedGallery, SocialLinks, Tags } from "@/components";

const SlugPortfolioContent: React.FC = () => {
    return (
        <div className={"content-padding-responsive"}>
            <PortfolioHeader/>
            <div>
                <div className={"w-full h-full flex flex-col gap-5 grow shrink basis-auto"}>
                    <PortfolioOverview />
                    <RoundedGallery />
                    <PortfolioProcess />
                    <PortfolioWrapper title={"Result"}>
                        <Paragraph size={"custom"} color={"text-title"} className={"mb-4 max-sm:text-sm text-base leading-[1.8]"}>
                            Proin egestas ex sapien, non porta lectus lobortis ac. Vestibulum ante ipsum primis in faucibus orci luctus en ultrices posuere cubilia curae; Nullam finibus turpis turpis, a imperdiet orci ornare sedat. Quisque scelerisque libero diam, nec gravida mi placerat vel. Vestibulum ut nunc sed nunc molestie congue. Cras eget nisl inholet lorem facilisis viverra sed sit amet massa. Duisonabat fringilla consectetur turpis, quis dictum tellus interdum condimentum. In hac habitasse platea dictumst. Sed ut ultrices eros, eu tincidunt ex. Nunc in gravida nibh, vestibulum egestas purus. In nibh sapien, convallis nec pellentesque ac, rutrum nec diam
                        </Paragraph>
                    </PortfolioWrapper>
                    <div className={"mt-4 flex flex-row gap-6"}>
                        <div className={"w-1/2 flex flex-col"}>
                            <img src="/portfolio-details-img2-1.jpg" alt="Imagine" className={"w-full h-auto rounded-tl-[6.25rem] rounded-tr-md rounded-br-[6.25rem] rounded-bl-md object-cover"}/>
                        </div>
                        <div className={"w-2/5 flex flex-col"}>
                            <img src="/portfolio-details-img2-1.jpg" alt="Imagine" className={"w-full h-auto rounded-tr-[6.25rem] rounded-tl-md rounded-bl-[6.25rem] rounded-br-md object-cover"}/>
                        </div>
                    </div>
                </div>
                <div className={"pt-16 flex-between flex-wrap gap-5"}>
                    <Tags/>
                    <SocialLinks/>
                </div>
                <Navigation/>
            </div>
        </div>
    );
};

export default SlugPortfolioContent;