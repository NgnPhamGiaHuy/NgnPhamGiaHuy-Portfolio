import React, { useMemo } from "react";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { AboutCollapsibleSection, AboutIntroduction, AboutLayout, AboutSkillsSection, Heading, QuarterGrid, TestimonialList } from "@/components";

const AboutContent: React.FC = () => {
    const { certificates, educations, experiences } = PERSONAL_IDENTIFIABLE_INFORMATION;

    const collapsibleSection = useMemo(() => [
        { title: "Educations", list: educations },
        { title: "Experiences", list: experiences },
    ], [educations, experiences]);

    return (
        <div className={"content-padding-responsive"}>
            <AboutIntroduction />
            <AboutSkillsSection />

            <div className={"h-full max-lg:mt-16 max-xl:mt-20 mt-24"}>
                <Heading level={3} size={"custom"} fontWeight={"medium"} className={"heading-underline heading-tertiary-text leading-snug inline-block relative"}>
                    Resume
                </Heading>
            </div>

            { collapsibleSection.map((section, index: number) => (
                <AboutCollapsibleSection key={index} title={section.title} list={section.list} />
            )) }

            <AboutLayout title={"Certificates"}>
                <QuarterGrid list={certificates}/>
            </AboutLayout>

            <AboutLayout title={"Testimonial"}>
                <TestimonialList />
            </AboutLayout>
        </div>
    );
};

export default AboutContent;