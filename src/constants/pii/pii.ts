import { PII_FAQS } from "./misc/faqs";
import { PII_CONTACTS } from "./social/contacts";
import { PII_SOCIAL_PROFILES } from "./social/socialProfiles";
import { PII_PORTFOLIOS } from "./work/portfolios";
import { PII_SERVICES } from "./work/services";
import { PII_SKILLS } from "./professional/skills";
import { PII_EDUCATIONS } from "./professional/educations";
import { PII_PROJECTS } from "./professional/projects";
import { PII_EXPERIENCES } from "./professional/experiences";
import { PII_CERTIFICATES } from "./professional/certificates";
import { PII_BASIC_INFOS } from "./basic";

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