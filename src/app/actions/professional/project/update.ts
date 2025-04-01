"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    UPDATE_PROJECT:
        "UPDATE projects SET title = ?, description = ?, start_date = ?, end_date = ?, technologies = ?, image_url = ?, project_url = ? WHERE id = ?",
    UPDATE_TITLE: "UPDATE projects SET title = ? WHERE id = ?",
    UPDATE_DESCRIPTION: "UPDATE projects SET description = ? WHERE id = ?",
    UPDATE_START_DATE: "UPDATE projects SET start_date = ? WHERE id = ?",
    UPDATE_END_DATE: "UPDATE projects SET end_date = ? WHERE id = ?",
    UPDATE_TECHNOLOGIES: "UPDATE projects SET technologies = ? WHERE id = ?",
    UPDATE_IMAGE_URL: "UPDATE projects SET image_url = ? WHERE id = ?",
    UPDATE_PROJECT_URL: "UPDATE projects SET project_url = ? WHERE id = ?",
} as const;

export const updateProject = async (
    id: number,
    title: string,
    description: string | null,
    start_date: string,
    end_date: string | null,
    technologies: string | null,
    image_url: string | null,
    project_url: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PROJECT);
        stmt.run(
            title,
            description,
            start_date,
            end_date,
            technologies,
            image_url,
            project_url,
            id
        );
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project" };
    }
};

export const updateProjectTitle = async (
    id: number,
    title: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_TITLE);
        stmt.run(title, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project title" };
    }
};

export const updateProjectDescription = async (
    id: number,
    description: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DESCRIPTION);
        stmt.run(description, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project description" };
    }
};

export const updateProjectStartDate = async (
    id: number,
    start_date: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_START_DATE);
        stmt.run(start_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project start date" };
    }
};

export const updateProjectEndDate = async (
    id: number,
    end_date: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_END_DATE);
        stmt.run(end_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project end date" };
    }
};

export const updateProjectTechnologies = async (
    id: number,
    technologies: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_TECHNOLOGIES);
        stmt.run(technologies, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project technologies" };
    }
};

export const updateProjectImage = async (
    id: number,
    image_url: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_IMAGE_URL);
        stmt.run(image_url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project image" };
    }
};

export const updateProjectUrl = async (
    id: number,
    project_url: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PROJECT_URL);
        stmt.run(project_url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update project URL" };
    }
};
