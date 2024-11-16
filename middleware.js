export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/supplier/:path*",
    "/settings/:path*",
    "/contractor/:path*",
    "/company/:path*",
    "/sites/:path*",
    "/admin/:path*",
    "/employees/:path*",
    "/workers/:path*",
  ],
};