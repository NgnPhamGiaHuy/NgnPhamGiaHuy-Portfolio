"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    UPDATE_SOCIAL_PROFILE:
        "UPDATE social_profiles SET platform = ?, url = ? WHERE id = ?",
    UPDATE_PLATFORM: "UPDATE social_profiles SET platform = ? WHERE id = ?",
    UPDATE_URL: "UPDATE social_profiles SET url = ? WHERE id = ?",
} as const;

// Update operations
export const updateSocialProfile = async (
    id: number,
    platform: string,
    url: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_SOCIAL_PROFILE);
        stmt.run(platform, url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update social profile" };
    }
};

export const updateSocialProfilePlatform = async (
    id: number,
    platform: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PLATFORM);
        stmt.run(platform, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update social profile platform" };
    }
};

export const updateSocialProfileUrl = async (
    id: number,
    url: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_URL);
        stmt.run(url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update social profile URL" };
    }
};
