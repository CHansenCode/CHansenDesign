import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
    };
  }
  interface User {
    _id: string;
  }
}
