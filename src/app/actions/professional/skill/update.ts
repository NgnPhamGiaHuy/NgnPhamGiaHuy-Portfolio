"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    UPDATE_SKILL:
        "UPDATE skills SET name = ?, category = ?, proficiency_level = ? WHERE id = ?",
    UPDATE_NAME: "UPDATE skills SET name = ? WHERE id = ?",
    UPDATE_CATEGORY: "UPDATE skills SET category = ? WHERE id = ?",
    UPDATE_PROFICIENCY: "UPDATE skills SET proficiency_level = ? WHERE id = ?",
} as const;

export const updateSkill = async (
    id: number,
    name: string,
    category: string,
    proficiency_level: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_SKILL);
        stmt.run(name, category, proficiency_level, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update skill" };
    }
};

export const updateSkillName = async (
    id: number,
    name: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_NAME);
        stmt.run(name, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update skill name" };
    }
};

export const updateSkillCategory = async (
    id: number,
    category: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CATEGORY);
        stmt.run(category, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update skill category" };
    }
};

export const updateSkillProficiency = async (
    id: number,
    proficiency_level: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PROFICIENCY);
        stmt.run(proficiency_level, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update skill proficiency" };
    }
};
