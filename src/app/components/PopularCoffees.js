import Image from "next/image";
import Link from "next/link";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { PiCoffee } from "react-icons/pi";
import CoffeeCard from "./CoffeeCard";

const PopularCoffees = async () => {
    const textShadow = {
        textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
        letterSpacing: "1px",
    };

    const bgStyle = {
        backgroundImage: "url('/images/more/productbg.png')",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
    };

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/coffees`, {
        cache: "no-store", // optional, disables caching
    });
    const { coffees } = await res.json();
    // Limit to first 5 coffees
    const limitedCoffees = coffees.slice(0, 4);

    return (
        <div style={bgStyle} className="max-w-[1920px] mx-auto">
            <div className="max-w-[1320px] mx-auto py-10 w-11/12 md:w-10/12">
                <div className="text-center space-y-2 mb-8">
                    <p className="text-sm font-medium">--- Sip & Savor ---</p>
                    <h2
                        className="text-3xl font-bold text-primary pri-font"
                        style={textShadow}
                    >
                        Our Popular Products
                    </h2>
                </div>
                {/* Coffee Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {limitedCoffees.map((coffee) => (
                        // <div
                        //     key={coffee.id}
                        //     className="card card-side bg-[#f5f4f1a9] flex gap-5 items-center p-4"
                        // >
                        //     <img
                        //         src={coffee.image}
                        //         alt={coffee.name}
                        //         className="h-38"
                        //     />
                        //     <div className="flex-1 ml-1 space-y-1">
                        //         <p>
                        //             <span className="font-bold">Name:</span>{" "}
                        //             {coffee.name}
                        //         </p>
                        //         <p>
                        //             <span className="font-bold">Roast:</span>{" "}
                        //             {coffee.roastLevel}
                        //         </p>
                        //         <p>
                        //             <span className="font-bold">Price:</span>{" "}
                        //             {coffee.price} Taka
                        //         </p>

                        //         {/* details btn */}
                        //         <button className="p-3 rounded-sm bg-[#D2B48C]">
                        //             <FaEye className="text-white" />
                        //         </button>
                        //     </div>
                        // </div>
                        <CoffeeCard
                            key={coffee.id}
                            coffee={coffee}
                        ></CoffeeCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularCoffees;
