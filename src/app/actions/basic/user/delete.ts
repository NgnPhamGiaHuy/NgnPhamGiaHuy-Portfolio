"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    DELETE_USER: "DELETE FROM users WHERE id = ?",
} as const;

export const deleteUser = async (id: number): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_USER);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete user" };
    }
};
