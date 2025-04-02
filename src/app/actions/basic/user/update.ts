"use server";

import db from "@/lib/db";
import { ApiResponse } from "@/types/database";

const QUERIES = {
  UPDATE_USER:
    "UPDATE users SET bio = ?, full_name = ?, avatar_url = ? WHERE id = ?",
  UPDATE_BIO: "UPDATE users SET bio = ? WHERE id = ?",
  UPDATE_NAME: "UPDATE users SET full_name = ? WHERE id = ?",
  UPDATE_AVATAR: "UPDATE users SET avatar_url = ? WHERE id = ?",
} as const;

export const updateUser = async (
  id: number,
  bio: string,
  full_name: string,
  avatar_url: string | null
): Promise<ApiResponse<void>> => {
  try {
    const stmt = db.prepare(QUERIES.UPDATE_USER);
    stmt.run(bio, full_name, avatar_url, id);
    return { success: true };
  } catch (error) {
    return { error: "Failed to update user" };
  }
};

export const updateUserBio = async (
  id: number,
  bio: string
): Promise<ApiResponse<void>> => {
  try {
    const stmt = db.prepare(QUERIES.UPDATE_BIO);
    stmt.run(bio, id);
    return { success: true };
  } catch (error) {
    return { error: "Failed to update user bio" };
  }
};

export const updateUserName = async (
  id: number,
  full_name: string
): Promise<ApiResponse<void>> => {
  try {
    const stmt = db.prepare(QUERIES.UPDATE_NAME);
    stmt.run(full_name, id);
    return { success: true };
  } catch (error) {
    return { error: "Failed to update user name" };
  }
};

export const updateUserAvatar = async (
  id: number,
  avatar_url: string | null
): Promise<ApiResponse<void>> => {
  try {
    const stmt = db.prepare(QUERIES.UPDATE_AVATAR);
    stmt.run(avatar_url, id);
    return { success: true };
  } catch (error) {
    return { error: "Failed to update user avatar" };
  }
};
