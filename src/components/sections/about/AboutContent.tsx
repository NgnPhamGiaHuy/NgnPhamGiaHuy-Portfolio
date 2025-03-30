import React, { useMemo } from "react";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { AboutCollapsibleSection, AboutIntroduction, AboutLayout, AboutSkillsSection, Heading, QuarterGrid, TestimonialItem } from "@/components";

const AboutContent: React.FC = () => {
    const { certificates, educations, experiences } = PERSONAL_IDENTIFIABLE_INFORMATION;

    const collapsibleSection = useMemo(() => [
        { title: "Educations", list: educations },
        { title: "Experiences", list: experiences },
    ], [educations, experiences]);

    return (
        <div>
            <AboutIntroduction />
            <AboutSkillsSection />
            <div>
                <div className={"h-full mt-24"}>
                    <Heading level={3} size={"md"} fontWeight={"medium"} className={"about-heading-before leading-snug inline-block relative"}>
                        Resume
                    </Heading>
                </div>
            </div>
            { collapsibleSection.map((section, index:number) => (
                <AboutCollapsibleSection key={index} title={section.title} list={section.list} />
            )) }
            <AboutLayout title={"Certificates"}>
                <QuarterGrid list={certificates}/>
            </AboutLayout>
            <AboutLayout title={"Testimonial"}>
                <ul>
                    <TestimonialItem authorName={"NgnPhamGiaHuy"} authorRole={"Developer"} authorImage={"/author.png"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper hendrerit egestas. Curabitur convallis lectus lorem, eget hendrerit augue malesuada quis. Maecenas consectetur justo vitae dui bibendum, vel ultricies eros elementum. Duis hendrerit magna nec interdum vulputate. Nunc ut fermentum turpis. Suspendisse orci ipsum, maximus at risus quis, malesuada facilisis diam. Ut suscipit, velit non eleifend eleifend, purus justo dapibus neque, lacinia pellentesque nisi sapien eu ante. Integer rutrum commodo mattis. Ut ornare quam mollis augue tincidunt ornare. Ut dapibus bibendum quam in efficitur.
                    </TestimonialItem>
                </ul>
            </AboutLayout>
        </div>
    );
};

export default AboutContent;