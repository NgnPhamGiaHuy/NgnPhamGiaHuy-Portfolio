"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    DELETE_EDUCATION: "DELETE FROM educations WHERE id = ?",
} as const;

export const deleteEducation = async (
    id: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_EDUCATION);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete education" };
    }
};
