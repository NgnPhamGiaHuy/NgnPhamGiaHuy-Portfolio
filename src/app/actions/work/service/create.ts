"use server";

import db from "@/lib/db";
import { ApiResponse, Service } from "@/types/database";

// Query constants
const QUERIES = {
    CREATE_SERVICE:
        "INSERT INTO services (user_id, title, description, price_range) VALUES (?, ?, ?, ?)",
    GET_SERVICE: "SELECT * FROM services WHERE id = ?",
} as const;

// Create operation
export const addService = async (
    user_id: number,
    title: string,
    description: string | null,
    price_range: string | null
): Promise<ApiResponse<Service>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_SERVICE);
        const result = stmt.run(user_id, title, description, price_range);
        const newService = db
            .prepare(QUERIES.GET_SERVICE)
            .get(result.lastInsertRowid);
        return { success: true, data: newService as Service };
    } catch (error) {
        return { error: "Failed to add service" };
    }
};
