"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    UPDATE_EDUCATION:
        "UPDATE educations SET school = ?, degree = ?, field = ?, start_date = ?, end_date = ?, description = ? WHERE id = ?",
    UPDATE_SCHOOL: "UPDATE educations SET school = ? WHERE id = ?",
    UPDATE_DEGREE: "UPDATE educations SET degree = ? WHERE id = ?",
    UPDATE_FIELD: "UPDATE educations SET field = ? WHERE id = ?",
    UPDATE_START_DATE: "UPDATE educations SET start_date = ? WHERE id = ?",
    UPDATE_END_DATE: "UPDATE educations SET end_date = ? WHERE id = ?",
    UPDATE_DESCRIPTION: "UPDATE educations SET description = ? WHERE id = ?",
} as const;

export const updateEducation = async (
    id: number,
    school: string,
    degree: string,
    field: string,
    start_date: string,
    end_date: string | null,
    description: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_EDUCATION);
        stmt.run(school, degree, field, start_date, end_date, description, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education" };
    }
};

export const updateEducationSchool = async (
    id: number,
    school: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_SCHOOL);
        stmt.run(school, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education school" };
    }
};

export const updateEducationDegree = async (
    id: number,
    degree: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DEGREE);
        stmt.run(degree, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education degree" };
    }
};

export const updateEducationField = async (
    id: number,
    field: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_FIELD);
        stmt.run(field, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education field" };
    }
};

export const updateEducationStartDate = async (
    id: number,
    start_date: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_START_DATE);
        stmt.run(start_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education start date" };
    }
};

export const updateEducationEndDate = async (
    id: number,
    end_date: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_END_DATE);
        stmt.run(end_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education end date" };
    }
};

export const updateEducationDescription = async (
    id: number,
    description: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DESCRIPTION);
        stmt.run(description, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update education description" };
    }
};
