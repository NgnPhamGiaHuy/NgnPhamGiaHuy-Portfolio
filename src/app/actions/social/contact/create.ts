"use server";

import db from "@/lib/db";
import { ApiResponse, Contact } from "@/types/database";

// Query constants
const QUERIES = {
    CREATE_CONTACT:
        "INSERT INTO contacts (user_id, email, phone, location, website) VALUES (?, ?, ?, ?, ?)",
    GET_CONTACT: "SELECT * FROM contacts WHERE id = ?",
} as const;

// Create operation
export const addContact = async (
    user_id: number,
    email: string,
    phone: string | null,
    location: string | null,
    website: string | null
): Promise<ApiResponse<Contact>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_CONTACT);
        const result = stmt.run(user_id, email, phone, location, website);
        const newContact = db
            .prepare(QUERIES.GET_CONTACT)
            .get(result.lastInsertRowid);

        return { success: true, data: newContact as Contact };
    } catch (error) {
        return { error: "Failed to add contact" };
    }
};
