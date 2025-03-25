import { ContactProps, ServiceProps, SkillInterface, SocialProfilesProps, TimelineEntry } from "@/types";

export interface PIIProps {
    fullName: string;
    title: string;
    bio: string;
    contact: ContactProps;
    services: ServiceProps[];
    experienceYear: string;
    projectsCompleted: number;
    skills: SkillInterface[];
    education: TimelineEntry[];
    experience: TimelineEntry[];
    certificates: TimelineEntry[];
    socialProfiles: SocialProfilesProps[];
}