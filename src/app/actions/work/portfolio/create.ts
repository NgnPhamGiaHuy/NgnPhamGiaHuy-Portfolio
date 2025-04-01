"use server";

import db from "@/lib/db";
import { ApiResponse, Portfolio } from "@/types/database";

// Query constants
const QUERIES = {
    CREATE_PORTFOLIO:
        "INSERT INTO portfolios (user_id, title, category, description, image_url) VALUES (?, ?, ?, ?, ?)",
    GET_PORTFOLIO: "SELECT * FROM portfolios WHERE id = ?",
} as const;

// Create operation
export const addPortfolio = async (
    user_id: number,
    title: string,
    category: string,
    description: string | null,
    image_url: string | null
): Promise<ApiResponse<Portfolio>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_PORTFOLIO);
        const result = stmt.run(user_id, title, category, description, image_url);
        const newPortfolio = db
            .prepare(QUERIES.GET_PORTFOLIO)
            .get(result.lastInsertRowid);
        return { success: true, data: newPortfolio as Portfolio };
    } catch (error) {
        return { error: "Failed to add portfolio" };
    }
};
