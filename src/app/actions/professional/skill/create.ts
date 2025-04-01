"use server";

import db from "@/lib/db";
import { ApiResponse, Skill } from "@/types/database";

const QUERIES = {
    CREATE_SKILL:
        "INSERT INTO skills (user_id, name, category, proficiency_level) VALUES (?, ?, ?, ?)",
    GET_SKILL: "SELECT * FROM skills WHERE id = ?",
} as const;

export const addSkill = async (
    user_id: number,
    name: string,
    category: string,
    proficiency_level: number
): Promise<ApiResponse<Skill>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_SKILL);
        const result = stmt.run(user_id, name, category, proficiency_level);
        const newSkill = db.prepare(QUERIES.GET_SKILL).get(result.lastInsertRowid);
        return { success: true, data: newSkill as Skill };
    } catch (error) {
        return { error: "Failed to add skill" };
    }
};
