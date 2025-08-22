"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Login</h1>

            <button
                onClick={() => signIn("google")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
                Sign in with Google
            </button>
        </div>
    );
}