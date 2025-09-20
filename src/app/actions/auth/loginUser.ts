"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ILoginPayload } from "@/types/auth";

const loginUser = async ({ email, password }: ILoginPayload) => {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const user = await userCollection.findOne<{
    email: string;
    password: string;
    username: string;
    _id: string;
  }>({ email });

  if (!user) return null;


  if (!(await bcrypt.compare(password, user.password))) return null;

  
  return { username: user.username, _id: user._id.toString() };
};

export default loginUser;
