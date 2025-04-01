"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    UPDATE_CONTACT:
        "UPDATE contacts SET email = ?, phone = ?, location = ?, website = ? WHERE id = ?",
    UPDATE_EMAIL: "UPDATE contacts SET email = ? WHERE id = ?",
    UPDATE_PHONE: "UPDATE contacts SET phone = ? WHERE id = ?",
    UPDATE_LOCATION: "UPDATE contacts SET location = ? WHERE id = ?",
    UPDATE_WEBSITE: "UPDATE contacts SET website = ? WHERE id = ?",
} as const;

// Update operations
export const updateContact = async (
    id: number,
    email: string,
    phone: string | null,
    location: string | null,
    website: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CONTACT);
        stmt.run(email, phone, location, website, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update contact" };
    }
};

export const updateContactEmail = async (
    id: number,
    email: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_EMAIL);
        stmt.run(email, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update contact email" };
    }
};

export const updateContactPhone = async (
    id: number,
    phone: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_PHONE);
        stmt.run(phone, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update contact phone" };
    }
};

export const updateContactLocation = async (
    id: number,
    location: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_LOCATION);
        stmt.run(location, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update contact location" };
    }
};

export const updateContactWebsite = async (
    id: number,
    website: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_WEBSITE);
        stmt.run(website, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update contact website" };
    }
};
