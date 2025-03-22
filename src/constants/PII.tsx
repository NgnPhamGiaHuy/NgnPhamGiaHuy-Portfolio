import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { PIIProps } from "@/types";

const PERSONAL_IDENTIFIABLE_INFORMATION : PIIProps = {
    profile: {
        fullName: "NgnPham GiaHuy",
        title: "Full-stack Developer",
        experience: "1+",
        projectsCompleted: "20",
        bio: "Passionate full-stack developer with experience in building scalable web applications. Adept at both front-end and back-end development, bringing projects from concept to completion.",
        location: "Ho Chi Minh City, Vietnam",
        email: "yuh.nguyenpham@gmail.com",
        phone: "+84 123 456 789",
        skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
        education: "Bachelor of Computer Science - International University, Vietnam",
    },
    socialProfiles: [
        { title: "GitHub", icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/NgnPhamGiaHuy"},
        { title: "Linkedin", icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/nguyenphamgiahuy/"},
    ]
}

export default PERSONAL_IDENTIFIABLE_INFORMATION;