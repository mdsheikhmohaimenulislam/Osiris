'use client'
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
type IChild = {
  children: ReactNode;
};

const NextAuthProvider = ({ children }: IChild) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
