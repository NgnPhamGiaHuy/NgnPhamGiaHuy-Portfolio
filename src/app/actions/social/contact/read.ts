"use server";

import db from "@/lib/db";
import { ApiResponse, Contact } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_CONTACT: "SELECT * FROM contacts WHERE user_id = ?",
    GET_CONTACT: "SELECT * FROM contacts WHERE id = ?",
    GET_ALL_CONTACTS: "SELECT * FROM contacts",
} as const;

// Read operations
export const getUserContact = async (
    user_id: number
): Promise<ApiResponse<Contact>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_CONTACT).get(user_id);
        return { success: true, data: result as Contact };
    } catch (error) {
        return { error: "Failed to get user contact" };
    }
};

export const getContact = async (id: number): Promise<ApiResponse<Contact>> => {
    try {
        const result = db.prepare(QUERIES.GET_CONTACT).get(id);
        return { success: true, data: result as Contact };
    } catch (error) {
        return { error: "Failed to get contact" };
    }
};

export const getContacts = async (): Promise<ApiResponse<Contact[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_CONTACTS).all();
        return { success: true, data: result as Contact[] };
    } catch (error) {
        return { error: "Failed to get all contacts" };
    }
};
