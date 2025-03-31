import { PII_FAQS } from "@/constants/pii/misc/faqs";
import { PII_CONTACTS } from "@/constants/pii/social/contacts";
import { PII_SOCIAL_PROFILES } from "@/constants/pii/social/socialProfiles";
import { PII_PORTFOLIOS } from "@/constants/pii/work/portfolios";
import { PII_SERVICES } from "@/constants/pii/work/services";
import { PII_SKILLS } from "@/constants/pii/professional/skills";
import { PII_EDUCATIONS } from "@/constants/pii/professional/educations";
import { PII_PROJECTS } from "@/constants/pii/professional/projects";
import { PII_EXPERIENCES } from "@/constants/pii/professional/experiences";
import { PII_CERTIFICATES } from "@/constants/pii/professional/certificates";
import { PII_BASIC_INFOS } from "@/constants/pii/basic";

const PII_MISC = {
    faqs: PII_FAQS,
}

const PII_SOCIALS = {
    contacts: PII_CONTACTS,
    socialProfiles: PII_SOCIAL_PROFILES,
}

const PII_WORKS = {
    portfolios: PII_PORTFOLIOS,
    services: PII_SERVICES,
}

const PII_PROFESSIONALS = {
    skills: PII_SKILLS,
    educations: PII_EDUCATIONS,
    projects: PII_PROJECTS,
    experiences: PII_EXPERIENCES,
    experienceYears: "1+",
    certificates: PII_CERTIFICATES,
}

export const PERSONAL_IDENTIFIABLE_INFORMATION = {
    ...PII_MISC,
    ...PII_WORKS,
    ...PII_SOCIALS,
    ...PII_BASIC_INFOS,
    ...PII_PROFESSIONALS,
}