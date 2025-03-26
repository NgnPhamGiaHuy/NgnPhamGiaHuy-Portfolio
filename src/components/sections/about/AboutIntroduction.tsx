"use client"

import React from "react";

import { AboutStatsSection, Heading, Paragraph } from "@/components";

const AboutIntroduction : React.FC = () => {
    return (
        <div>
            <Heading level={3} size={"md"} fontWeight={"medium"} className={"about-heading-before leading-snug inline-block relative"}>
                About Me
            </Heading>
            <Paragraph className={"max-w-240 mt-8"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a venenatis augue, sit amet iaculis est. Quisque ac dui nisi. Nunc fermentum aliquet arcu. Suspendisse in placerat dui. Praesent finibus metus metus, nec porttitor est consectetur vel. Praesent eleifend, nunc et finibus semper, tellus sapien consectetur leo, at feugiat elit tortor a lorem. Praesent feugiat sollicitudin nisl. Pellentesque fringilla arcu id consequat molestie. Aliquam pharetra nunc in risus tempor lacinia. Fusce eleifend tempus leo a commodo.
            </Paragraph>
            <AboutStatsSection />
        </div>
    );
};

export default AboutIntroduction;