"use server";

import db from "@/lib/db";
import { ApiResponse, Experience } from "@/types/database";

// Query constants
const QUERIES = {
    CREATE_EXPERIENCE:
        "INSERT INTO experiences (user_id, company_name, company_url, position_title, start_date, end_date, location, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    GET_EXPERIENCE: "SELECT * FROM experiences WHERE id = ?",
} as const;

// Create operation
export const addExperience = async (
    user_id: number,
    company_name: string,
    company_url: string | null,
    position_title: string,
    start_date: string,
    end_date: string | null,
    location: string | null,
    description: string | null
): Promise<ApiResponse<Experience>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_EXPERIENCE);
        const result = stmt.run(
            user_id,
            company_name,
            company_url,
            position_title,
            start_date,
            end_date,
            location,
            description
        );
        const newExperience = db
            .prepare(QUERIES.GET_EXPERIENCE)
            .get(result.lastInsertRowid);
        return { success: true, data: newExperience as Experience };
    } catch (error) {
        return { error: "Failed to add experience" };
    }
};
