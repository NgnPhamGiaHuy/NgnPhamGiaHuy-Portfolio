import React from 'react';
import { Paragraph, PortfolioWrapper } from "@/components";

const PortfolioOverview : React.FC = () => {
    return (
        <PortfolioWrapper margin={"m-0"} title={"Project Overview"}>
            <Paragraph size={"custom"} color={"text-title"} className={"mb-4 max-sm:text-sm text-base leading-[1.8]"}>
                Proin egestas ex sapien, non porta lectus lobortis ac. Vestibulum ante ipsum primis in faucibus orci luctus en ultrices posuere cubilia curae; Nullam finibus turpis turpis, a imperdiet orci ornare sedat. Quisque scelerisque libero diam, nec gravida mi placerat vel. Vestibulum ut nunc sed nunc molestie congue. Cras eget nisl inholet lorem facilisis viverra sed sit amet massa. Duisonabat fringilla consectetur turpis, quis dictum tellus interdum condimentum. In hac habitasse platea dictumst. Sed ut ultrices eros, eu tincidunt ex. Nunc in gravida nibh, vestibulum egestas purus. In nibh sapien, convallis nec pellentesque ac, rutrum nec diam
            </Paragraph>
            <Paragraph size={"custom"} color={"text-title"} className={"mb-4 max-sm:text-sm text-base leading-[1.8]"}>
                Proin egestas ex sapien, non porta lectus lobortis ac. Vestibulum ante ipsum primis in faucibus orci luctus en ultrices posuere cubilia curae; Nullam finibus turpis turpis, a imperdiet orci ornare sedat. Quisque scelerisque libero diam, nec gravida mi placerat vel. Vestibulum ut nunc sed nunc molestie congue. Cras eget nisl inholet lorem facilisis viverra sed sit amet massa. Duisonabat fringilla consectetur turpis, quis dictum tellus interdum condimentum. In hac habitasse platea dictumst. Sed ut ultrices eros, eu tincidunt ex. Nunc in gravida nibh, vestibulum egestas purus. In nibh sapien, convallis nec pellentesque ac, rutrum nec diam
            </Paragraph>
        </PortfolioWrapper>
    );
};

export default PortfolioOverview;