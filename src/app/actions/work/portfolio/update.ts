"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    UPDATE_PORTFOLIO:
        "UPDATE portfolios SET title = ?, category = ?, description = ?, image_url = ? WHERE id = ?",
    UPDATE_TITLE: "UPDATE portfolios SET title = ? WHERE id = ?",
    UPDATE_CATEGORY: "UPDATE portfolios SET category = ? WHERE id = ?",
    UPDATE_DESCRIPTION: "UPDATE portfolios SET description = ? WHERE id = ?",
    UPDATE_IMAGE_URL: "UPDATE portfolios SET image_url = ? WHERE id = ?",
} as const;

// Update operations
export const updatePortfolio = async (
    id: number,
    title: string,
    category: string,
    description: string | null,
    image_url: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PORTFOLIO);
        stmt.run(title, category, description, image_url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update portfolio" };
    }
};

export const updatePortfolioTitle = async (
    id: number,
    title: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_TITLE);
        stmt.run(title, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update portfolio title" };
    }
};

export const updatePortfolioCategory = async (
    id: number,
    category: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CATEGORY);
        stmt.run(category, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update portfolio category" };
    }
};

export const updatePortfolioDescription = async (
    id: number,
    description: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DESCRIPTION);
        stmt.run(description, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update portfolio description" };
    }
};

export const updatePortfolioImage = async (
    id: number,
    image_url: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_IMAGE_URL);
        stmt.run(image_url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update portfolio image" };
    }
};
