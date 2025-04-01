"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    DELETE_FAQ: "DELETE FROM faqs WHERE id = ?",
} as const;

export const deleteFaq = async (id: number): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_FAQ);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete FAQ" };
    }
};
