import GoogleProvider from "next-auth/providers/google";

// This file configures how authentication works in our app
const authOptions = {
    // Define how users can log in
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    // Customize auth pages
    pages: {
        signIn: "/login", // Use our custom login page instead of NextAuth default
    },

    // Control what happens after login/logout
    callbacks: {
        async redirect({ url, baseUrl }) {
            // After successful login, redirect to /coffees page
            if (url === baseUrl + "/login") {
                return baseUrl + "/coffees";
            }
            // For other cases, keep the default behavior
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },

    // Secret key for encrypting sessions (from .env.local)
    secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
