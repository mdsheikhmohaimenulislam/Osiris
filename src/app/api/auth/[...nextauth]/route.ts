import loginUser from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // Call your login helper
        const dbUser = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (!dbUser) return null;

        // Map your DB user to NextAuth's User type
        const user = {
          id: dbUser._id, // required
          name: dbUser.username, // optional
          email: credentials.email, // optional
        };

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("callbacks log: " ,user, account, profile, email, credentials)
      if (account) {
        try {
          const { providerAccountId, provider } = account;
          const { email, image, name: username } = user;
          const payload = {
            providerAccountId,
            provider,
            email,
            image,
            username,
          };
          // console.log("payload log: ", payload);
          const userCollection = await dbConnect(
            collectionNameObj.userCollection
          );
          const isUserExist = await userCollection.findOne({
            providerAccountId,
          });
          if (!isUserExist) {
            await userCollection.insertOne(payload);
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
  
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
