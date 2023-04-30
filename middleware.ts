import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default async function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // return new NextResponse(
  //   JSON.stringify({ success: true, message: "authentication success" }),
  //   { status: 200, headers: { "content-type": "application/json" } }
  // );
}

export const config = { matcher: ["/admin/:path*", "/api/:path*"] };
