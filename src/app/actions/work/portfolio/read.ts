"use server";

import db from "@/lib/db";
import { ApiResponse, Portfolio } from "@/types/database";

// Query constants
const QUERIES = {
    GET_USER_PORTFOLIOS: "SELECT * FROM portfolios WHERE user_id = ?",
    GET_PORTFOLIO: "SELECT * FROM portfolios WHERE id = ?",
    GET_ALL_PORTFOLIOS: "SELECT * FROM portfolios",
} as const;

// Read operations
export const getUserPortfolios = async (
    user_id: number
): Promise<ApiResponse<Portfolio[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_USER_PORTFOLIOS).all(user_id);
        return { success: true, data: result as Portfolio[] };
    } catch (error) {
        return { error: "Failed to get user portfolios" };
    }
};

export const getPortfolio = async (
    id: number
): Promise<ApiResponse<Portfolio>> => {
    try {
        const result = db.prepare(QUERIES.GET_PORTFOLIO).get(id);
        return { success: true, data: result as Portfolio };
    } catch (error) {
        return { error: "Failed to get portfolio" };
    }
};

export const getPortfolios = async (): Promise<ApiResponse<Portfolio[]>> => {
    try {
        const result = db.prepare(QUERIES.GET_ALL_PORTFOLIOS).all();
        return { success: true, data: result as Portfolio[] };
    } catch (error) {
        return { error: "Failed to get all portfolios" };
    }
};
