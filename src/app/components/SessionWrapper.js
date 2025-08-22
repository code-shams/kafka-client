"use client";

import { SessionProvider } from "next-auth/react";

// This wrapper component provides NextAuth session context to all child components
// We need this because SessionProvider is a client component but layout.js is a server component
export default function SessionWrapper({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}
