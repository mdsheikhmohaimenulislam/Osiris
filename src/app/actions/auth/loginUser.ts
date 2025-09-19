"use client";
import React from "react";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

interface IPayload {
  email: string;
  password: string;
}

const loginUser = async (payload: IPayload) => {
  const { email, password } = payload;

  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const user = await userCollection.findOne({ email });

  if (!user) {
    return null; 
  }


  const isPasswordOK = await bcrypt.compare(password, user.password);

  if (!isPasswordOK) {
    return null; 
  }

  return user; 
};

export default loginUser;
