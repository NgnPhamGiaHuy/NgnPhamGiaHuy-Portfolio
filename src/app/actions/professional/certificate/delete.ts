"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_CERTIFICATE: "DELETE FROM certificates WHERE id = ?",
} as const;

// Delete operation
export const deleteCertificate = async (
    id: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_CERTIFICATE);
        stmt.run(id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete certificate" };
    }
};
