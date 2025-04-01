"use server";

import db from "@/lib/db";
import { ApiResponse, Service } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_SERVICES: "SELECT * FROM services WHERE user_id = ?",
    GET_SERVICE: "SELECT * FROM services WHERE id = ?",
    GET_ALL_SERVICES: "SELECT * FROM services",
} as const;

// Read operations
export const getUserServices = async (
    user_id: number
): Promise<ApiResponse<Service[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_SERVICES).all(user_id);
        return { success: true, data: result as Service[] };
    } catch (error) {
        return { error: "Failed to get user services" };
    }
};

export const getService = async (id: number): Promise<ApiResponse<Service>> => {
    try {
        const result = db.prepare(QUERIES.GET_SERVICE).get(id);
        return { success: true, data: result as Service };
    } catch (error) {
        return { error: "Failed to get service" };
    }
};

export const getServices = async (): Promise<ApiResponse<Service[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_SERVICES).all();
        return { success: true, data: result as Service[] };
    } catch (error) {
        return { error: "Failed to get all services" };
    }
};
