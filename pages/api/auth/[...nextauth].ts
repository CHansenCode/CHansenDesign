import NextAuth, { NextAuthOptions } from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (await checkEmail(`${user?.email}`)) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, token, user }) {
      //add logic for user.role === token.role here
      return session;
    },
  },
};

export default NextAuth(authOptions);

async function checkEmail(mail: string) {
  let split = mail.split("@");

  if (split[1] === process.env.ALLOWED_EMAIL) {
    return true;
  } else {
    return false;
  }
}
