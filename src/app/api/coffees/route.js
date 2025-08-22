import { NextResponse } from "next/server";
import { coffees, addCoffee } from "@/app/lib/coffees";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/lib/authOptions";

// GET /api/coffees - Returns all coffees (public endpoint)
export async function GET() {
    return NextResponse.json({ coffees });
}

// POST /api/coffees - Add a new coffee (protected endpoint)
export async function POST(request) {
    // Check if user is logged in
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { error: "You must be logged in to add coffees" },
            { status: 401 }
        );
    }

    try {
        // Parse the coffee data from the request
        const coffeeData = await request.json();

        // Basic validation - make sure required fields are present
        if (!coffeeData.name || !coffeeData.price || !coffeeData.description) {
            return NextResponse.json(
                { error: "Name, price, and description are required" },
                { status: 400 }
            );
        }

        // Add the coffee to our "database"
        const newCoffee = addCoffee(coffeeData);

        return NextResponse.json(
            { message: "Coffee added successfully", coffee: newCoffee },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid data format" },
            { status: 400 }
        );
    }
}
