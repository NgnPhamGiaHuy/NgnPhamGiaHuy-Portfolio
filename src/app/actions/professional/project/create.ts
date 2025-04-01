"use server";

import db from "@/lib/db";
import { ApiResponse, Project } from "@/types/database";

const QUERIES = {
    CREATE_PROJECT:
        "INSERT INTO projects (user_id, title, description, start_date, end_date, technologies, image_url, project_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    GET_PROJECT: "SELECT * FROM projects WHERE id = ?",
} as const;

export const addProject = async (
    user_id: number,
    title: string,
    description: string | null,
    start_date: string,
    end_date: string | null,
    technologies: string | null,
    image_url: string | null,
    project_url: string | null
): Promise<ApiResponse<Project>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_PROJECT);
        const result = stmt.run(
            user_id,
            title,
            description,
            start_date,
            end_date,
            technologies,
            image_url,
            project_url
        );
        const newProject = db
            .prepare(QUERIES.GET_PROJECT)
            .get(result.lastInsertRowid);
        return { success: true, data: newProject as Project };
    } catch (error) {
        return { error: "Failed to add project" };
    }
};
