import NextAuth, { NextAuthOptions } from "next-auth";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

import GoogleProvider from "next-auth/providers/google";

async function checkEmail(mail: string) {
  const pre: string | undefined = process.env.ALLOWED_EMAIL_NAME;
  const suf: string | undefined = process.env.ALLOWED_EMAIL_PROVIDER;

  let preSplit = pre?.split(",");
  let sufSplit = suf?.split(",");
  let mailSplit = mail.split("@");

  let preFind = preSplit?.find((a) => a === mailSplit[0]);
  let sufFind = sufSplit?.find((a) => a === mailSplit[1]);

  if (preFind && sufFind) {
    return true;
  }

  return false;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  adapter: MongoDBAdapter(clientPromise),

  providers: [
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
