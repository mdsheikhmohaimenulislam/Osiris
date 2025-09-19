"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ILoginPayload } from "@/types/auth";

const loginUser = async ({ email, password }: ILoginPayload) => {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  // For testing purpose only (not production)
  const hashedPassword = await bcrypt.hash(password, 10);
  await userCollection.insertOne({ email, password: hashedPassword });

  const user = await userCollection.findOne<{
    email: string;
    password: string;
  }>({ email });

  if (!user) return null;

  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return user;
};

export default loginUser;
