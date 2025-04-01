"use server";

import db from "@/lib/db";
import { ApiResponse, SocialProfile } from "@/types/database";

// Query constants
const QUERIES = {
    CREATE_SOCIAL_PROFILE:
        "INSERT INTO social_profiles (user_id, platform, url) VALUES (?, ?, ?)",
    GET_SOCIAL_PROFILE: "SELECT * FROM social_profiles WHERE id = ?",
} as const;

// Create operation
export const addSocialProfile = async (
    user_id: number,
    platform: string,
    url: string
): Promise<ApiResponse<SocialProfile>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_SOCIAL_PROFILE);
        const result = stmt.run(user_id, platform, url);
        const newSocialProfile = db
            .prepare(QUERIES.GET_SOCIAL_PROFILE)
            .get(result.lastInsertRowid);
        return { success: true, data: newSocialProfile as SocialProfile };
    } catch (error) {
        return { error: "Failed to add social profile" };
    }
};
