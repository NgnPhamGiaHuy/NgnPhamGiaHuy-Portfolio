"use client"

import React from "react";

import { AboutBanner, AboutContent, Banner } from "@/components";

const About: React.FC = () => {
    return (
        <div>
            <div className={"section-container"}>
                <Banner>
                    <AboutBanner />
                </Banner>
                <div className={"section-content-large"}>
                    <AboutContent />
                </div>
            </div>
        </div>
    );
};

export default About;