"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    DELETE_PROJECT: "DELETE FROM projects WHERE id = ?",
} as const;

export const deleteProject = async (id: number): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_PROJECT);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete project" };
    }
};
