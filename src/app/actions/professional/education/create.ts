"use server";

import db from "@/lib/db";
import { ApiResponse, Education } from "@/types/database";

const QUERIES = {
    CREATE_EDUCATION:
        "INSERT INTO educations (user_id, school, degree, field, start_date, end_date, description) VALUES (?, ?, ?, ?, ?, ?, ?)",
    GET_EDUCATION: "SELECT * FROM educations WHERE id = ?",
} as const;

export const addEducation = async (
    user_id: number,
    school: string,
    degree: string,
    field: string,
    start_date: string,
    end_date: string | null,
    description: string | null
): Promise<ApiResponse<Education>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_EDUCATION);
        const result = stmt.run(
            user_id,
            school,
            degree,
            field,
            start_date,
            end_date,
            description
        );
        const newEducation = db
            .prepare(QUERIES.GET_EDUCATION)
            .get(result.lastInsertRowid);
        return { success: true, data: newEducation as Education };
    } catch (error) {
        return { error: "Failed to add education" };
    }
};
