// app/coffees/[id]/page.js
import Link from "next/link";
import { coffees, getCoffeeById } from "@/app/lib/coffees";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/lib/authOptions";
import { redirect } from "next/navigation";

// Next.js passes params to the page function
const CoffeeDetails = async ({ params }) => {
    const { id } = params;
    const coffee = getCoffeeById(id);

    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect("/login");
    }

    if (!coffee) {
        return (
            <div className="max-w-4xl mx-auto py-10 text-center">
                <h1 className="text-2xl font-bold">Coffee not found</h1>
                <Link
                    href="/coffees"
                    className="text-blue-500 underline mt-4 block"
                >
                    Back to Coffee List
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <Link
                href="/coffees"
                className="text-blue-500 underline mb-4 inline-block"
            >
                &larr; Back to Coffee List
            </Link>

            <div className="flex flex-col md:flex-row gap-8 bg-[#f5f4f1a9] p-6 rounded-md">
                <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full md:w-1/2 rounded-md"
                />

                <div className="flex-1 space-y-3">
                    <h1 className="text-3xl font-bold">{coffee.name}</h1>
                    <p className="text-gray-700">{coffee.description}</p>
                    <p>
                        <span className="font-bold">Origin:</span>{" "}
                        {coffee.origin}
                    </p>
                    <p>
                        <span className="font-bold">Roast Level:</span>{" "}
                        {coffee.roastLevel}
                    </p>
                    <p>
                        <span className="font-bold">Price:</span> {coffee.price}{" "}
                        Taka
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
