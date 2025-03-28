import {
    ContactProps, FAQSectionProps, PortfolioProps,
    ServiceProps,
    SkillInterface,
    SocialProfilesProps,
    TimelineEntry,
} from "@/types";

/**
 * Interface for Personal Information and Identity (PII) properties
 * @interface PIIProps
 * @property {string} fullName - The complete name of the individual
 * @property {string} title - Professional title or role
 * @property {string} bio - Brief biographical description
 * @property {ContactProps} contact - Contact information including email, phone, and location
 * @property {ServiceProps[]} services - Array of services or expertise offered
 * @property {string} experienceYear - Years of professional experience
 * @property {number} projectsCompleted - Total number of completed projects
 * @property {SkillInterface[]} skills - Array of technical skills and competencies
 * @property {TimelineEntry[]} education - Educational history timeline
 * @property {TimelineEntry[]} experience - Professional experience timeline
 * @property {TimelineEntry[]} certificates - Professional certifications timeline
 * @property {SocialProfilesProps[]} socialProfiles - Array of social media profiles
 */
export interface PIIProps {
    fullName: string;
    title: string;
    bio: string;
    contact: ContactProps;
    services: ServiceProps[];
    experienceYear: string;
    projectsCompleted: number;
    faqs: FAQSectionProps[];
    portfolios: PortfolioProps[];
    skills: SkillInterface[];
    education: TimelineEntry[];
    experience: TimelineEntry[];
    certificates: TimelineEntry[];
    socialProfiles: SocialProfilesProps[];
}
