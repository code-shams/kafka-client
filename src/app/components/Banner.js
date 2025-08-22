const Banner = () => {
    const bgStyle = {
        backgroundImage: "url('/images/more/banner.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };
    return (
        <div
            style={bgStyle}
            className="font-rancho w-full h-[600px] grid grid-cols-12 border-t-5 border-[#372727]"
        >
            <div className="col-start-7 col-span-5 space-y-5 flex flex-col justify-center">
                <p className="pri-font text-3xl font-semibold text-white">
                    Would you like a Cup of Delicious Coffee?
                </p>
                <p className="font-raleway text-white text-sm">
                    It's coffee time - Sip & Savor - Relaxation in every sip!
                    Get the nostalgia back!! Your companion of every moment!!!
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <div>
                    <button className="px-3 py-1 bg-[#d2b48c] text-[#331a15] text-xl pri-font rounded-xs">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
