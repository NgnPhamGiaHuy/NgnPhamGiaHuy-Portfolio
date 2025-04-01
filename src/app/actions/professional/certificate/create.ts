"use server";

import db from "@/lib/db";
import { ApiResponse, Certificate } from "@/types/database";

// Query constants
const QUERIES = {
    CREATE_CERTIFICATE:
        "INSERT INTO certificates (user_id, name, issuing_organization, issue_date, expiry_date, certificate_url, certificate_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    GET_CERTIFICATE: "SELECT * FROM certificates WHERE id = ?",
} as const;

// Create operation
export const addCertificate = async (
    user_id: number,
    name: string,
    issuing_organization: string,
    issue_date: string,
    expiry_date: string | null,
    certificate_url: string | null,
    certificate_id: string | null
): Promise<ApiResponse<Certificate>> => {
    try {
        const stmt = db.prepare(QUERIES.CREATE_CERTIFICATE);
        const result = stmt.run(
            user_id,
            name,
            issuing_organization,
            issue_date,
            expiry_date,
            certificate_url,
            certificate_id
        );
        const newCertificate = db
            .prepare(QUERIES.GET_CERTIFICATE)
            .get(result.lastInsertRowid);
        return { success: true, data: newCertificate as Certificate };
    } catch (error) {
        return { error: "Failed to add certificate" };
    }
};
