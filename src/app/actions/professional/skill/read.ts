"use server";

import db from "@/lib/db";
import { ApiResponse, Skill } from "@/types/database";

const QUERIES = {
    GET_USER_SKILLS: "SELECT * FROM skills WHERE user_id = ?",
    GET_SKILL: "SELECT * FROM skills WHERE id = ?",
    GET_ALL_SKILLS: "SELECT * FROM skills",
} as const;

export const getUserSkills = async (
    id: number
): Promise<ApiResponse<Skill[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_SKILLS).all(id);
        return { success: true, data: result as Skill[] };
    } catch (error) {
        return { error: "Failed to get skills" };
    }
};

export const getSkills = async (): Promise<ApiResponse<Skill[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_SKILLS).all();
        return { success: true, data: result as Skill[] };
    } catch (error) {
        return { error: "Failed to get skills" };
    }
};
