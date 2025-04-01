"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_SKILL: "DELETE FROM skills WHERE id = ?",
} as const;

// Delete operation
export const deleteSkill = async (id: number): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_SKILL);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete skill" };
    }
};
