"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_PORTFOLIO: "DELETE FROM portfolios WHERE id = ?",
} as const;

// Delete operation
export const deletePortfolio = async (
    id: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_PORTFOLIO);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete portfolio" };
    }
};
