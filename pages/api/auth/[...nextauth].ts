import NextAuth, { NextAuthOptions } from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/spreadsheets",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      console.log(account);
      console.log(profile);

      if (account?.provider === "google") {
        return profile?.email
          ? profile.email.endsWith("@chansen.design")
          : false;
      }
      return false;
    },
    async session({ session, user }) {
      session = { ...session, user: { ...session.user, _id: user.id } };
      return session;
    },
  },
};

export default NextAuth(authOptions);
