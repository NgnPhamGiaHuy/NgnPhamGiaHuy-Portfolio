"use server";

import db from "@/lib/db";
import { ApiResponse, User } from "@/types/database";

const QUERIES = {
  GET_USER: "SELECT * FROM users WHERE id = ?",
  GET_ALL_USERS: "SELECT * FROM users",
} as const;

export const getUserInfo = async (id: number): Promise<ApiResponse<User>> => {
  try {
    const result = db.prepare(QUERIES.GET_USER).get(id);
    return { success: true, data: result as User };
  } catch (error) {
    return { error: "Failed to get user info" };
  }
};

export const getAllUsers = async (): Promise<ApiResponse<User[]>> => {
  try {
    const result = db.prepare(QUERIES.GET_ALL_USERS).all();
    return { success: true, data: result as User[] };
  } catch (error) {
    return { error: "Failed to get users" };
  }
};
