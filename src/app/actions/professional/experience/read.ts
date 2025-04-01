"use server";

import db from "@/lib/db";
import { ApiResponse, Experience } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_EXPERIENCES: "SELECT * FROM experiences WHERE user_id = ?",
    GET_EXPERIENCE: "SELECT * FROM experiences WHERE id = ?",
    GET_ALL_EXPERIENCES: "SELECT * FROM experiences",
} as const;

// Read operations
export const getUserExperiences = async (
    id: number
): Promise<ApiResponse<Experience[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_EXPERIENCES).all(id);
        return { success: true, data: result as Experience[] };
    } catch (error) {
        return { error: "Failed to get experiences" };
    }
};

export const getExperiences = async (): Promise<ApiResponse<Experience[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_EXPERIENCES).all();
        return { success: true, data: result as Experience[] };
    } catch (error) {
        return { error: "Failed to get experiences" };
    }
};
