import loginUser from "@/app/actions/auth/loginUser";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

// custom login payload
//  Added custom type for loginUser
interface ILoginPayload {
  email: string;
  password: string;
}

// next-auth options
export const authOption: NextAuthOptions = {  // Explicit type (NextAuthOptions)
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
      async authorize(credentials): Promise<User | null> {  //  Explicit return type
        if (!credentials) return null;

        const dbUser = await loginUser({
          email: credentials.email,
          password: credentials.password,
        } as ILoginPayload);    //  Cast to ILoginPayload

        if (!dbUser) return null;

        const user: User = {
          id: dbUser._id.toString(), // NextAuth requires string Ensure The string
          name: dbUser.username,
          email: credentials.email,
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
    async signIn({ user, account}) {   // profile/email/credentials removed
      //  No need to manually annotate — NextAuth already types this correctly
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
          console.error("SignIn callback error:", error);
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
