"use client";
import Image from "next/image";
import logo from "../../../public/images/more/logo1.png";
const Navbar = () => {
    return (
        <nav
            style={{
                backgroundImage: "url('/images/more/navbar-bg.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex gap-3 items-center justify-between py-2 max-w-screen-2xl w-11/12 mx-auto">
                <div className="flex gap-2 items-center">
                    <Image className="w-20" src={logo} alt="nav logo" />
                    <h1 className="font-rancho text-6xl text-white">Kafka</h1>
                </div>
                <ul className="text-white flex gap-5 font-rancho">
                    <li>
                        <button className="font-semibold text-2xl cursor-pointer"
                            onClick={() => {
                                console.log("login");
                            }}
                        >
                            Log In
                        </button>
                    </li>
                    <li>
                        <button className="font-semibold text-2xl cursor-pointer"
                            onClick={() => {
                                console.log("logout");
                            }}
                        >
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
