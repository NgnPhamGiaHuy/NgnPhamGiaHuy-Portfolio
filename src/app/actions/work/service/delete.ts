"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_SERVICE: "DELETE FROM services WHERE id = ?",
} as const;

// Delete operation
export const deleteService = async (id: number): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_SERVICE);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete service" };
    }
};
