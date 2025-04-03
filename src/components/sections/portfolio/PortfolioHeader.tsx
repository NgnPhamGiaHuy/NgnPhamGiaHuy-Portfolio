import React from 'react';

import { Heading, Paragraph, PortfolioInfo } from "@/components";

const PortfolioHeader: React.FC = () => {
    return (
        <div className={"mb-10"}>
            <Heading level={1} size={"custom"} fontWeight={"semibold"} className={"mb-8 heading-tertiary-text leading-none"}>
                Heading
            </Heading>
            <Paragraph size={"custom"} color={"text-title"} className={"max-sm:text-sm text-base leading-[1.8]"}>
                Project Overview Proin egestas ex sapien, non porta lectus lobortis ac. Vestibulum ante ipsum primis in faucibus orci luctus en ultrices posuere cubilia curae; Nullam finibus turpis turpis, a imperdiet orci ornare sedat. Quisque scelerisque libero diam, nec gravida mi placerat vel. Vestibulum ut nunc sed nunc molestie congue. Cras eget nisl inholet lorem facilisis viverra sed sit amet massa. Duisonabat fringilla consectetur turpis, quis dictum tellus interdum condimentum. In hac habitasse platea dictumst. Sed ut ultrices eros, eu tincidunt ex. Nunc in gravida nibh, vestibulum egestas purus. In nibh.....
            </Paragraph>
            <PortfolioInfo/>
        </div>
    );
};

export default PortfolioHeader;