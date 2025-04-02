"use server";

import db from "@/lib/db";
import { ApiResponse, FAQ } from "@/types/database";

const QUERIES = {
  GET_USER_FAQS: "SELECT * FROM faqs WHERE user_id = ?",
  GET_FAQ: "SELECT * FROM faqs WHERE id = ?",
  GET_ALL_FAQS: "SELECT * FROM faqs",
} as const;

export const getUserFaqs = async (id: number): Promise<ApiResponse<FAQ[]>> => {
  try {
    const result = db.prepare(QUERIES.GET_USER_FAQS).all(id);
    return { success: true, data: result as FAQ[] };
  } catch (error) {
    return { error: "Failed to get FAQs" };
  }
};

export const getFaqs = async (): Promise<ApiResponse<FAQ[]>> => {
  try {
    const result = db.prepare(QUERIES.GET_ALL_FAQS).all();
    return { success: true, data: result as FAQ[] };
  } catch (error) {
    return { error: "Failed to get FAQs" };
  }
};
