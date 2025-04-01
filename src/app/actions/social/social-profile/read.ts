"use server";

import db from "@/lib/db";
import { ApiResponse, SocialProfile } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_SOCIAL_PROFILES: "SELECT * FROM social_profiles WHERE user_id = ?",
    GET_SOCIAL_PROFILE: "SELECT * FROM social_profiles WHERE id = ?",
    GET_ALL_SOCIAL_PROFILES: "SELECT * FROM social_profiles",
} as const;

// Read operations
export const getUserSocialProfiles = async (
    id: number
): Promise<ApiResponse<SocialProfile[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_SOCIAL_PROFILES).all(id);
        return { success: true, data: result as SocialProfile[] };
    } catch (error) {
        return { error: "Failed to get social profiles" };
    }
};

export const getSocialProfiles = async (): Promise<
    ApiResponse<SocialProfile[]>
> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_SOCIAL_PROFILES).all();
        return { success: true, data: result as SocialProfile[] };
    } catch (error) {
        return { error: "Failed to get social profiles" };
    }
};
