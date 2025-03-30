import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { SocialProfilesProps } from "@/types";

export const PII_SOCIAL_PROFILES: SocialProfilesProps[] = [
    { title: "GitHub", icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/NgnPhamGiaHuy"},
    { title: "Linkedin", icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/nguyenphamgiahuy/"},
]