"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    UPDATE_SERVICE:
        "UPDATE services SET title = ?, description = ?, price_range = ? WHERE id = ?",
    UPDATE_TITLE: "UPDATE services SET title = ? WHERE id = ?",
    UPDATE_DESCRIPTION: "UPDATE services SET description = ? WHERE id = ?",
    UPDATE_PRICE_RANGE: "UPDATE services SET price_range = ? WHERE id = ?",
} as const;

// Update operations
export const updateService = async (
    id: number,
    title: string,
    description: string | null,
    price_range: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_SERVICE);
        stmt.run(title, description, price_range, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update service" };
    }
};

export const updateServiceTitle = async (
    id: number,
    title: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_TITLE);
        stmt.run(title, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update service title" };
    }
};

export const updateServiceDescription = async (
    id: number,
    description: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DESCRIPTION);
        stmt.run(description, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update service description" };
    }
};

export const updateServicePriceRange = async (
    id: number,
    price_range: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PRICE_RANGE);
        stmt.run(price_range, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update service price range" };
    }
};
