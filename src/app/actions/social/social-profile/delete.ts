"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_SOCIAL_PROFILE: "DELETE FROM social_profiles WHERE id = ?",
} as const;

// Delete operation
export const deleteSocialProfile = async (
    id: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_SOCIAL_PROFILE);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete social profile" };
    }
};
