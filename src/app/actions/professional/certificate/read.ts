"use server";

import db from "@/lib/db";
import { ApiResponse, Certificate } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_CERTIFICATES: "SELECT * FROM certificates WHERE user_id = ?",
    GET_CERTIFICATE: "SELECT * FROM certificates WHERE id = ?",
    GET_ALL_CERTIFICATES: "SELECT * FROM certificates",
} as const;

// Read operations
export const getUserCertificates = async (
    user_id: number
): Promise<ApiResponse<Certificate[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_CERTIFICATES).all(user_id);
        return { success: true, data: result as Certificate[] };
    } catch (error) {
        return { error: "Failed to get user certificates" };
    }
};

export const getCertificate = async (
    id: number
): Promise<ApiResponse<Certificate>> => {
    try {
        const result = db.prepare(QUERIES.GET_CERTIFICATE).get(id);
        return { success: true, data: result as Certificate };
    } catch (error) {
        return { error: "Failed to get certificate" };
    }
};

export const getCertificates = async (): Promise<
    ApiResponse<Certificate[]>
> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_CERTIFICATES).all();
        return { success: true, data: result as Certificate[] };
    } catch (error) {
        return { error: "Failed to get all certificates" };
    }
};
