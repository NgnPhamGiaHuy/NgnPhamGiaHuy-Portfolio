"use server";

import db from "@/lib/db";
import { ApiResponse, User } from "@/types/database";

const QUERIES = {
    CREATE_USER:
        "INSERT INTO users (bio, full_name, avatar_url) VALUES (?, ?, ?)",
    GET_USER: "SELECT * FROM users WHERE id = ?",
} as const;

export const createUser = async (
    bio: string,
    full_name: string,
    avatar_url: string | null
): Promise<ApiResponse<User>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_USER);
        const result = stmt.run(bio, full_name, avatar_url);
        const newUser = db.prepare(QUERIES.GET_USER).get(result.lastInsertRowid);
        return { success: true, data: newUser as User };
    } catch (error) {
        return { error: "Failed to create user" };
    }
};
