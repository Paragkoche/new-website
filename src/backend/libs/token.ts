import jwt from "jsonwebtoken";

const key = process.env.jwt_token_key;
export const create_token = async (data: { id: string }) => jwt.sign(data, key);
export const verify_token = async (token: string) => jwt.verify(token, key);
