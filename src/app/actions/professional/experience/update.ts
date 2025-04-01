"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    UPDATE_EXPERIENCE:
        "UPDATE experiences SET company = ?, position = ?, start_date = ?, end_date = ?, description = ?, location = ? WHERE id = ?",
    UPDATE_COMPANY: "UPDATE experiences SET company = ? WHERE id = ?",
    UPDATE_POSITION: "UPDATE experiences SET position = ? WHERE id = ?",
    UPDATE_START_DATE: "UPDATE experiences SET start_date = ? WHERE id = ?",
    UPDATE_END_DATE: "UPDATE experiences SET end_date = ? WHERE id = ?",
    UPDATE_DESCRIPTION: "UPDATE experiences SET description = ? WHERE id = ?",
    UPDATE_LOCATION: "UPDATE experiences SET location = ? WHERE id = ?",
} as const;

// Update operations
export const updateExperience = async (
    id: number,
    company: string,
    position: string,
    start_date: string,
    end_date: string | null,
    description: string | null,
    location: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_EXPERIENCE);
        stmt.run(
            company,
            position,
            start_date,
            end_date,
            description,
            location,
            id
        );
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience" };
    }
};

export const updateExperienceCompany = async (
    id: number,
    company: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_COMPANY);
        stmt.run(company, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience company" };
    }
};

export const updateExperiencePosition = async (
    id: number,
    position: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_POSITION);
        stmt.run(position, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience position" };
    }
};

export const updateExperienceStartDate = async (
    id: number,
    start_date: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_START_DATE);
        stmt.run(start_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience start date" };
    }
};

export const updateExperienceEndDate = async (
    id: number,
    end_date: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_END_DATE);
        stmt.run(end_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience end date" };
    }
};

export const updateExperienceDescription = async (
    id: number,
    description: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DESCRIPTION);
        stmt.run(description, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience description" };
    }
};

export const updateExperienceLocation = async (
    id: number,
    location: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_LOCATION);
        stmt.run(location, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update experience location" };
    }
};
