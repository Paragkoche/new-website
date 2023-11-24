import { genSalt, hash, compare } from "bcrypt";

export const create_password = async (password: string) => {
  const salt = await genSalt(14);
  return await hash(password, salt);
};

export const verify_password = async (
  hash_password: string,
  password: string
) => await compare(password, hash_password);
