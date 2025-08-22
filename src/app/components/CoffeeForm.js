"use client";

import Swal from "sweetalert2";

const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // Basic validation
    for (const key in newCoffee) {
        if (!newCoffee[key]) {
            Swal.fire({
                title: "Error",
                text: "Something went wrong",
                icon: "error",
            });
            return;
        }
    }

    try {
        const res = await fetch("/api/coffees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCoffee),
        });

        const data = await res.json();

        if (res.ok) {
            Swal.fire({
                title: "Successfully added coffee",
                icon: "success",
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error",
                text: data.error || "Something went wrong",
                icon: "error",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: "Unable to add coffee",
            icon: "error",
        });
    }
};

const textShadow = {
    textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
    letterSpacing: "1px",
};

const CoffeeForm = () => {
    return (
        <form
            onSubmit={handleFormSubmit}
            className="bg-[#F4F3F0] rounded-lg p-8 shadow-sm mb-20 font-raleway"
        >
            <h1
                className="text-3xl pri-font font-semibold text-center text-primary mb-6"
                style={textShadow}
            >
                Add New Coffee
            </h1>

            <p className="text-gray-600 text-center mb-8 sec-font w-3/4 mx-auto">
                Enter coffee details below to add a new product.
            </p>

            {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { label: "Name", id: "name" },
                    { label: "Chef", id: "chef" },
                    { label: "Price", id: "price" },
                    { label: "Taste", id: "taste" },
                    { label: "Category", id: "category" },
                    { label: "Details", id: "description" },
                ].map((field) => (
                    <div key={field.id}>
                        <label
                            htmlFor={field.id}
                            className="block text-[#1B1A1A] font-medium mb-2"
                        >
                            {field.label}
                        </label>
                        <input
                            type="text"
                            id={field.id}
                            name={field.id}
                            placeholder={`Enter coffee ${field.label.toLowerCase()}`}
                            className="input border-0 rounded p-2 w-full bg-white"
                        />
                    </div>
                ))}
            </div>

            {/* Photo URL */}
            <div className="mt-6">
                <label
                    htmlFor="image"
                    className="block text-[#1B1A1A] font-medium mb-2"
                >
                    Photo URL
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Enter photo URL"
                    className="input rounded p-2 border-0 w-full bg-white"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="mt-8 w-full rounded font-rancho bg-[#D2B48C] border-2 text-xl border-primary font-medium"
            >
                Add Coffee
            </button>
        </form>
    );
};

export default CoffeeForm;
