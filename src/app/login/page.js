"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="flex justify-center py-5">
            <div className="bg-[#F4F3F0] p-5 rounded-lg space-y-5">
                <h1 className="font-rancho text-center text-3xl">Login</h1>
                <button
                    onClick={() => signIn("google")}
                    className="px-4 py-2 bg-[#D2B48C] text-[#331A15] cursor-pointer rounded-lg shadow font-raleway font-semibold"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}
