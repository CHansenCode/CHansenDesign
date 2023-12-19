import { NextRequest, NextResponse } from "next/server";
// import { checkSession } from "./lib-api/mongo/checkSession";

export default async function middleware(request: NextRequest) {
  // const verifiedSession = checkSession(request);
  // if (!verifiedSession) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // return new NextResponse(
  //   JSON.stringify({ success: true, message: "authentication success" }),
  //   { status: 200, headers: { "content-type": "application/json" } }
  // );

  console.log("mw url src =>", request.url);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/:path*",
    "/edit/:path*",
    "/dashboard/:path*",
    "/view/:path*",
  ],
};
