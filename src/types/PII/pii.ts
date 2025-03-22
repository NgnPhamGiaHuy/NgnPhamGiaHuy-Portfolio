import { Profile } from "@/types/PII/profile";
import { SocialProfilesProps } from "@/types/PII/socialProfiles";

export interface PIIProps {
    profile: Profile;
    socialProfiles: SocialProfilesProps[];
}