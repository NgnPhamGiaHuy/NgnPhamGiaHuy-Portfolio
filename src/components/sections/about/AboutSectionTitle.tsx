import React from "react";

interface AboutSectionTitleProps {
    title: string;
}

const AboutSectionTitle : React.FC<AboutSectionTitleProps> = ({ title }) => {
    return (
        <div className={"mb-4"}>
            <span className={"px-6 py-1.75 text-lg text-primary-1 font-semibold font-(family-name:--font-montserrat) italic rounded-[50px] border border-b-4 border-r-4 border-solid border-primary-1 leading-none"}>
                { title }
            </span>
        </div>
    );
};

export default AboutSectionTitle;