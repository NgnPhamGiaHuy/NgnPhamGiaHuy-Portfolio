"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_EXPERIENCE: "DELETE FROM experiences WHERE id = ?",
} as const;

// Delete operation
export const deleteExperience = async (
    id: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_EXPERIENCE);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete experience" };
    }
};
