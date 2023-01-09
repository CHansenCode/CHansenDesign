import NextAuth, { NextAuthOptions } from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

import GoogleProvider from "next-auth/providers/google";

async function checkEmail(mail: string) {
  let split = mail.split("@");

  if (split[0] === "alberto" && split[1] === "veo.co") {
    return true;
  }

  if (split[1] === process.env.ALLOWED_EMAIL) {
    return true;
  } else {
    return false;
  }
}

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
    async signIn({ user, account, profile }: any) {
      if (await checkEmail(`${user?.email}`)) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
