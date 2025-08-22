"use client";
import Image from "next/image";
import logo from "../../../public/images/more/logo1.png";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
    const { data: session, status } = useSession();
    return (
        <nav
            style={{
                backgroundImage: "url('/images/more/navbar-bg.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex gap-3 items-center justify-between py-2 max-w-screen-2xl w-11/12 mx-auto font-rancho">
                <div className="flex gap-2 items-center">
                    <Image className="w-20" src={logo} alt="nav logo" />
                    <h1 className="font-rancho text-6xl text-white">Kafka</h1>
                </div>
                <div className="flex items-center space-x-6">
                    <Link
                        href="/"
                        className="hover:text-amber-200 text-white text-2xl transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/coffees"
                        className="hover:text-amber-200 text-white text-2xl transition-colors"
                    >
                        Coffees
                    </Link>

                    {/* Show "Add Coffee" link only if user is logged in */}
                    {session && (
                        <Link
                            href="/dashboard/add-coffee"
                            className="hover:text-amber-200 text-white text-2xl transition-colors"
                        >
                            Add Coffee
                        </Link>
                    )}
                </div>

                <div>
                    {status === "loading" ? (
                        // Show loading placeholder while checking auth status
                        <div className="w-20 h-8 bg-amber-800 rounded animate-pulse"></div>
                    ) : session ? (
                        // User is logged in - show name and logout button
                        <div className="flex items-center space-x-4">
                            <span className="text-xl text-white">
                                Hi, {session.user?.name?.split(" ")[0]}
                            </span>
                            <button
                                onClick={() => signOut()}
                                className="bg-amber-800 hover:bg-amber-700 text-white text-2xl px-4 py-2 rounded transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        // User is not logged in - show login button
                        <Link
                            href="/login"
                            className="bg-amber-800 hover:bg-amber-700 text-white text-2xl px-4 py-2 rounded transition-colors"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
