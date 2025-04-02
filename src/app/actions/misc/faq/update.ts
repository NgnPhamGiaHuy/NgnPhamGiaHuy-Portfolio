"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
    UPDATE_FAQ:
        "UPDATE faqs SET question = ?, answer = ?, category = ?, display_order = ?, is_active = ? WHERE id = ?",
    UPDATE_QUESTION: "UPDATE faqs SET question = ? WHERE id = ?",
    UPDATE_ANSWER: "UPDATE faqs SET answer = ? WHERE id = ?",
    UPDATE_CATEGORY: "UPDATE faqs SET category = ? WHERE id = ?",
    UPDATE_DISPLAY_ORDER: "UPDATE faqs SET display_order = ? WHERE id = ?",
    UPDATE_IS_ACTIVE: "UPDATE faqs SET is_active = ? WHERE id = ?",
} as const;

export const updateFaq = async (
    id: number,
    question: string,
    answer: string,
    category: string,
    display_order: number,
    is_active: boolean
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_FAQ);
        stmt.run(question, answer, category, display_order, is_active, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update Faq" };
    }
};

export const updateFaqQuestion = async (
    id: number,
    question: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_QUESTION);
        stmt.run(question, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update Faq question" };
    }
};

export const updateFaqAnswer = async (
    id: number,
    answer: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_ANSWER);
        stmt.run(answer, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update Faq answer" };
    }
};

export const updateFaqCategory = async (
    id: number,
    category: string
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_CATEGORY);
        stmt.run(category, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update Faq category" };
    }
};

export const updateFaqDisplayOrder = async (
    id: number,
    display_order: number
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_DISPLAY_ORDER);
        stmt.run(display_order, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update Faq display order" };
    }
};

export const updateFaqIsActive = async (
    id: number,
    is_active: boolean
): Promise<ApiResponse<void>> => {
    try {
        const stmt = db.prepare(QUERIES.UPDATE_IS_ACTIVE);
        stmt.run(is_active, id);
        return { success: true };
    } catch (error) {
        return { error: "Failed to update Faq active status" };
    }
};
