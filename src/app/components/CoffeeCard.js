import Link from "next/link";
import { FaEye } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
    return (
        <div
            key={coffee.id}
            className="card card-side bg-[#f5f4f1a9] flex gap-5 items-center p-4"
        >
            <img src={coffee.image} alt={coffee.name} className="h-38" />
            <div className="flex-1 ml-1 space-y-1">
                <p>
                    <span className="font-bold">Name:</span> {coffee.name}
                </p>
                <p>
                    <span className="font-bold">Roast:</span>{" "}
                    {coffee.roastLevel}
                </p>
                <p>
                    <span className="font-bold">Price:</span> {coffee.price}{" "}
                    Taka
                </p>

                {/* details btn */}
                <Link href={`/coffees/${coffee.id}`}>
                    <div className="p-3 w-max rounded-sm bg-[#D2B48C]">
                        <FaEye className="text-white" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CoffeeCard;
