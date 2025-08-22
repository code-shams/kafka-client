import NextAuth from "next-auth";
import authOptions from "@/app/lib/authOptions";

const handler = NextAuth(authOptions);

// This is required for App Router in Next.js 13+
export { handler as GET, handler as POST };
