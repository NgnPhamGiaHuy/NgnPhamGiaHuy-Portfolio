import React from "react";

const AboutSectionTitle : React.FC<{ title: string }> = React.memo(({ title }) => {
    return (
        <div className={"mb-12"}>
            <span className={"max-sm:px-4 px-8 py-2 text-lg text-primary-1 font-semibold font-(family-name:--font-montserrat) italic rounded-[50px] border border-b-4 border-r-4 border-solid border-primary-1 leading-none"}>
                { title }
            </span>
        </div>
    );
});

AboutSectionTitle.displayName = "AboutSectionTitle";

export default AboutSectionTitle;