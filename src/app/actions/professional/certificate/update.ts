"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

// Query constants
const QUERIES = {
    UPDATE_CERTIFICATE:
        "UPDATE certificates SET name = ?, issuing_organization = ?, issue_date = ?, expiry_date = ?, certificate_url = ?, certificate_id = ? WHERE id = ?",
    UPDATE_NAME: "UPDATE certificates SET name = ? WHERE id = ?",
    UPDATE_ISSUING_ORGANIZATION:
        "UPDATE certificates SET issuing_organization = ? WHERE id = ?",
    UPDATE_ISSUE_DATE: "UPDATE certificates SET issue_date = ? WHERE id = ?",
    UPDATE_EXPIRY_DATE: "UPDATE certificates SET expiry_date = ? WHERE id = ?",
    UPDATE_CERTIFICATE_URL:
        "UPDATE certificates SET certificate_url = ? WHERE id = ?",
    UPDATE_CERTIFICATE_ID:
        "UPDATE certificates SET certificate_id = ? WHERE id = ?",
} as const;

// Update operations
export const updateCertificate = async (
    id: number,
    name: string,
    issuing_organization: string,
    issue_date: string,
    expiry_date: string | null,
    certificate_url: string | null,
    certificate_id: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CERTIFICATE);
        stmt.run(
            name,
            issuing_organization,
            issue_date,
            expiry_date,
            certificate_url,
            certificate_id,
            id
        );
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate" };
    }
};

export const updateCertificateName = async (
    id: number,
    name: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_NAME);
        stmt.run(name, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate name" };
    }
};

export const updateCertificateIssuingOrganization = async (
    id: number,
    issuing_organization: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_ISSUING_ORGANIZATION);
        stmt.run(issuing_organization, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate issuing organization" };
    }
};

export const updateCertificateIssueDate = async (
    id: number,
    issue_date: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_ISSUE_DATE);
        stmt.run(issue_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate issue date" };
    }
};

export const updateCertificateExpiryDate = async (
    id: number,
    expiry_date: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_EXPIRY_DATE);
        stmt.run(expiry_date, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate expiry date" };
    }
};

export const updateCertificateUrl = async (
    id: number,
    certificate_url: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CERTIFICATE_URL);
        stmt.run(certificate_url, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate URL" };
    }
};

export const updateCertificateId = async (
    id: number,
    certificate_id: string | null
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CERTIFICATE_ID);
        stmt.run(certificate_id, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update certificate ID" };
    }
};
