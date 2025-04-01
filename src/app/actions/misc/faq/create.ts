"use server";

import db from "@/lib/db";
import { ApiResponse, FAQ } from "@/types/database";

const QUERIES = {
    CREATE_FAQ:
        "INSERT INTO faqs (user_id, question, answer, category, display_order, is_active) VALUES (?, ?, ?, ?, ?, ?)",
    GET_FAQ: "SELECT * FROM faqs WHERE id = ?",
} as const;

export const addFaq = async (
    user_id: number,
    question: string,
    answer: string,
    category: string,
    display_order: number,
    is_active: boolean
): Promise<ApiResponse<FAQ>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_FAQ);
        const result = stmt.run(
            user_id,
            question,
            answer,
            category,
            display_order,
            is_active
        );
        const newFaq = db.prepare(QUERIES.GET_FAQ).get(result.lastInsertRowid);
        return { success: true, data: newFaq as FAQ };
    } catch (error) {
        return { error: "Failed to add FAQ" };
    }
};
