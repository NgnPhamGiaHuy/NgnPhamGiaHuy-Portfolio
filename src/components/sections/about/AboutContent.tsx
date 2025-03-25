import React from "react";

import { PERSONAL_IDENTIFIABLE_INFORMATION } from "@/constants";
import { AboutCollapsibleSection, AboutIntroduction, AboutLayout, AboutSkillsSection, AboutTitle, QuarterGrid, TestimonialItem } from "@/components";

const AboutContent : React.FC = () => {
    const info = PERSONAL_IDENTIFIABLE_INFORMATION;
    
    const certificates = info.certificates;
    
    const collapsibleSection = [
        { title: "Educations", list: info.education },
        { title: "Experiences", list: info.experience },
    ]
    
    return (
        <div>
            <AboutIntroduction />
            <AboutSkillsSection />
            <div>
                <div className={"h-full mt-25"}>
                    <AboutTitle className={"font-medium leading-[1.3]"}>
                        Resume
                    </AboutTitle>
                </div>
            </div>
            { collapsibleSection.map((section, index) => (
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