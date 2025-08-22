// app/dashboard/add-coffee/page.js
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/lib/authOptions";
import Swal from "sweetalert2";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import CoffeeForm from "@/app/components/CoffeeForm";

const AddCoffeePage = async () => {
    // 1. Server-side session check
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect("/login"); // unauthenticated users go to login
    }

    // 3. Background & styling
    const bgStyle = {
        backgroundImage: "url('/images/more/addCoffeebg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    const textShadow = {
        textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
        letterSpacing: "1px",
    };
    
    // 4. Render page
    return (
        <div style={bgStyle} className="min-h-screen py-10">
            <div className="max-w-[1320px] mx-auto w-11/12 md:w-10/12">
                {/* Back button */}
                <div className="my-6">
                    <Link href="/" className="flex items-center text-primary">
                        <FaArrowLeft className="w-4 h-4 mr-2" />
                        <span
                            style={textShadow}
                            className="pri-font text-xl font-semibold"
                        >
                            Back to home
                        </span>
                    </Link>
                </div>

                {/* Form */}
                <CoffeeForm></CoffeeForm>
            </div>
        </div>
    );
};

export default AddCoffeePage;
