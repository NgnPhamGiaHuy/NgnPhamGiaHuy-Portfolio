import { SkillInterface, TimelineEntry } from "@/types";

export interface Profile {
    fullName: string;
    title: string;
    experienceYear: string;
    projectsCompleted: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    skills: SkillInterface[];
    education: TimelineEntry[];
    experience: TimelineEntry[];
    certificates: TimelineEntry[];
}