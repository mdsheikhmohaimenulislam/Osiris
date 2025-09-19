"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ILoginPayload } from "@/types/auth";

export const register = async (payload: ILoginPayload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    return { ...result, insertedId: result.insertedId.toString() };
  }

  return null;
};
