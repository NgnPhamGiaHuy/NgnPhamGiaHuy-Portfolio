"use server";

import db from "@/lib/db";
import { ApiResponse, Education } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_EDUCATIONS: "SELECT * FROM educations WHERE user_id = ?",
    GET_EDUCATION: "SELECT * FROM educations WHERE id = ?",
    GET_ALL_EDUCATIONS: "SELECT * FROM educations",
} as const;

// Read operations
export const getUserEducations = async (
    id: number
): Promise<ApiResponse<Education[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_EDUCATIONS).all(id);
        return { success: true, data: result as Education[] };
    } catch (error) {
        return { error: "Failed to get educations" };
    }
};

export const getEducations = async (): Promise<ApiResponse<Education[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_EDUCATIONS).all();
        return { success: true, data: result as Education[] };
    } catch (error) {
        return { error: "Failed to get educations" };
    }
};
