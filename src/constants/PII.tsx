import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { PIIProps } from "@/types";

const PERSONAL_IDENTIFIABLE_INFORMATION : PIIProps = {
    profile: {
        bio: "Passionate full-stack developer with experience in building scalable web applications. Adept at both front-end and back-end development, bringing projects from concept to completion.",
        certificates: [
            {
                url: "/certificates/Google-Advanced-Data-Analytics.jpg",
                title: "Google-Advanced-Data-Analytics",
                subtitle: "",
                year: "",
                description: "",
            }, {
                url: "/certificates/Google-Google-AI-Essential.jpg",
                title: "Google-Google-AI-Essential",
                subtitle: "",
                year: "",
                description: "",
            },  {
                url: "/certificates/Google-Google-AI-Essential.jpg",
                title: "Google-Google-AI-Essential",
                subtitle: "",
                year: "",
                description: "",
            },  {
                url: "/certificates/Google-Google-AI-Essential.jpg",
                title: "Google-Google-AI-Essential",
                subtitle: "",
                year: "",
                description: "",
            },  {
                url: "/certificates/Google-Google-AI-Essential.jpg",
                title: "Google-Google-AI-Essential",
                subtitle: "",
                year: "",
                description: "",
            },  {
                url: "/certificates/Google-Google-AI-Essential.jpg",
                title: "Google-Google-AI-Essential",
                subtitle: "",
                year: "",
                description: "",
            },  {
                url: "/certificates/Google-Google-AI-Essential.jpg",
                title: "Google-Google-AI-Essential",
                subtitle: "",
                year: "",
                description: "",
            }, 
        ],
        education: [
            {
                title: "International University, Vietnam",
                subtitle: "Bachelor of Computer Science",
                year: "Sep 2019 - April 2024",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis arcu erat. Ut bibendum sollicitudin erat vel luctus. Donec accumsan orci leo, mollis fringilla dolor pellentesque sit amet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            }
        ],
        email: "yuh.nguyenpham@gmail.com",
        experience: [
            {
                title: "Cánh Cam – Web Design Agency, Vietnam",
                subtitle: "Front-end Developer Intern",
                year: "Aug 2024 - Nov 2024",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis arcu erat. Ut bibendum sollicitudin erat vel luctus. Donec accumsan orci leo, mollis fringilla dolor pellentesque sit amet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            }, {
                title: "Cánh Cam – Web Design Agency, Vietnam",
                subtitle: "Front-end Developer Intern",
                year: "Aug 2024 - Nov 2024",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis arcu erat. Ut bibendum sollicitudin erat vel luctus. Donec accumsan orci leo, mollis fringilla dolor pellentesque sit amet. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            },
        ],
        experienceYear: "1+",
        fullName: "NgnPham GiaHuy",
        location: "Ho Chi Minh City, Vietnam",
        phone: "+84 123 456 789",
        projectsCompleted: "20",
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
        title: "Full-stack Developer"
    },
    socialProfiles: [
        { title: "GitHub", icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/NgnPhamGiaHuy"},
        { title: "Linkedin", icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/nguyenphamgiahuy/"},
    ]
}

export default PERSONAL_IDENTIFIABLE_INFORMATION;