"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    DELETE_CONTACT: "DELETE FROM contacts WHERE id = ?",
} as const;

// Delete operation
export const deleteContact = async (id: number): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.DELETE_CONTACT);
        stmt.run(id);
        
        return { success: true };
    } catch (error) {
        return { error: "Failed to delete contact" };
    }
};
