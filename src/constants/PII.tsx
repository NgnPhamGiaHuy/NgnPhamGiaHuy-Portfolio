import React from "react";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa6";

import { PIIProps } from "@/types";
import {SiMaterialdesignicons} from "react-icons/si";

const PERSONAL_IDENTIFIABLE_INFORMATION : PIIProps = {
    fullName: "NgnPham GiaHuy",
    title: "Full-stack Developer",
    bio: "Passionate full-stack developer with experience in building scalable web applications. Adept at both front-end and back-end development, bringing projects from concept to completion.",
    contact: {
        email: "yuh.nguyenpham@gmail.com",
        phone: "+84 123 456 789",
        location: "Ho Chi Minh City, Vietnam",
    },
    services: [
        { icon: <SiMaterialdesignicons className={"w-12 h-12 text-text"} />, title: "Product Design", list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
        { icon: <SiMaterialdesignicons className={"w-12 h-12 text-text"} />, title: "Product Design", list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
        { icon: <SiMaterialdesignicons className={"w-12 h-12 text-text"} />, title: "Product Design", list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
        { icon: <SiMaterialdesignicons className={"w-12 h-12 text-text"} />, title: "Product Design", list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"] },
    ],
    portfolios: [
        {
            title: "NFT Portfolio",
            category: "Product Design",
            icon: (index: number, hoveredIndex:number) => (
                <FaCodepen
                    className={"w-5 h-5"}
                    style={{ color: hoveredIndex === index ? 'white' : 'var(--color-primary-1)' }}
                />
            ),
        },{
            title: "NFT Portfolio",
            category: "Product Design",
            icon: (index: number, hoveredIndex:number) => (
                <FaCodepen
                    className={"w-5 h-5"}
                    style={{ color: hoveredIndex === index ? 'white' : 'var(--color-primary-1)' }}
                />
            ),
        },{
            title: "NFT Portfolio",
            category: "Product Design",
            icon: (index: number, hoveredIndex:number) => (
                <FaCodepen
                    className={"w-5 h-5"}
                    style={{ color: hoveredIndex === index ? 'white' : 'var(--color-primary-1)' }}
                />
            ),
        },
    ],
    experienceYear: "1+",
    projectsCompleted: 20,
    skills: [
        { name: "JavaScript", url: "/javascript.svg" },
        { name: "TypeScript", url: "/typescript.svg" },
        { name: "Python", url: "/python.svg" },
        { name: "ReactJS", url: "/reactjs.svg" },
        { name: "NextJS", url: "/nextjs.svg" },
        { name: "Redux", url: "/redux.svg" },
        { name: "TailwindCSS", url: "/tailwindcss.svg" },
        { name: "NodeJS", url: "/nodejs.svg" },
        { name: "Express", url: "/express.svg" },
        { name: "MongoDB", url: "/mongodb.svg" },
    ],
    education: [
        {
            title: "International University, Vietnam",
            subtitle: "Bachelor of Computer Science",
            year: "Sep 2019 - April 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis arcu erat. Ut bibendum sollicitudin erat vel luctus. Donec accumsan orci leo, mollis fringilla dolor pellentesque sit amet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        }
    ],
    experience: [
        {
            title: "Cánh Cam – Web Design Agency, Vietnam",
            subtitle: "Front-end Developer Intern",
            year: "Aug 2024 - Nov 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis arcu erat. Ut bibendum sollicitudin erat vel luctus. Donec accumsan orci leo, mollis fringilla dolor pellentesque sit amet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        },
    ],
    certificates: [
        {
            url: "/certificates/Google-Advanced-Data-Analytics.jpg",
            title: "Google-Advanced-Data-Analytics",
            subtitle: "",
            year: "",
            description: "",
        }
    ],
    socialProfiles: [
        { title: "GitHub", icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/NgnPhamGiaHuy"},
        { title: "Linkedin", icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/nguyenphamgiahuy/"},
    ]
}

export default PERSONAL_IDENTIFIABLE_INFORMATION;