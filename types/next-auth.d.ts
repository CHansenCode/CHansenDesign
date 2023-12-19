import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      _id: string;
      email: string;
    };
  }
  interface User {
    _id: string;
  }
}
