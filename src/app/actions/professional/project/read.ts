"use server";

import db from "@/lib/db";
import { ApiResponse, Project } from "@/types/database";

const QUERIES = {
    GET_USER_PROJECTS: "SELECT * FROM projects WHERE user_id = ?",
    GET_PROJECT: "SELECT * FROM projects WHERE id = ?",
    GET_ALL_PROJECTS: "SELECT * FROM projects",
} as const;

export const getUserProjects = async (
    id: number
): Promise<ApiResponse<Project[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_PROJECTS).all(id);
        return { success: true, data: result as Project[] };
    } catch (error) {
        return { error: "Failed to get projects" };
    }
};

export const getProjects = async (): Promise<ApiResponse<Project[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_PROJECTS).all();
        return { success: true, data: result as Project[] };
    } catch (error) {
        return { error: "Failed to get projects" };
    }
};
