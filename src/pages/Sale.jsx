import React from "react";

export default function Sale() {
    return (
        <main className="w-full m-0 p-0">

            {/* Header Banner */}
            <div className="w-full">
                <div className="flex justify-center items-center">
                    <img
                        className="w-full h-auto"
                        src="https://static5.lenskart.com/media/uploads/desktop-HP-hero-banner-2209.png"
                        alt=""
                    />
                </div>
            </div>

            {/* Offer Section */}
            <div className="py-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#181c3a] mb-8">
                    Best offer on all Glasses
                </h3>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        "https://static5.lenskart.com/media/uploads/Eyeglass_plpcard.png",
                        "https://static5.lenskart.com/media/uploads/Home-Premium-grid-shop-by-category-ZeroPower-13x9-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Home-Premium-grid-shop-by-category-Sunglasses-13x9.png",
                        "https://static5.lenskart.com/media/uploads/Home-Premium-grid-shop-by-category-ZeroPower-13x9-desktop-in-22july.png",
                    ].map((src, i) => (
                        <div key={i} className="w-[150px] sm:w-[200px] md:w-[250px]">
                            <img className="w-full object-contain" src={src} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gender Section */}
            <div className="text-center mt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#181c3a] mb-8">
                    Shop by Gender
                </h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {[
                        "https://static5.lenskart.com/media/uploads/Eyeconicsale-landing-page-shop-by-gender-eyeglasses-3_4-desktop-EOSS-9july.png",
                        "https://static5.lenskart.com/media/uploads/Eyeconicsale-landing-page-shop-by-gender-sunglasses-3_4-desktop-EOSS-9july.png",
                        "https://static5.lenskart.com/media/uploads/Eyeconicsale-landing-page-shop-by-gender-zero_power-3_4-desktop-EOSS-9july.png",
                    ].map((src, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <img className="w-[150px] sm:w-[180px] md:w-[200px]" src={src} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Shape Section */}
            <div className="text-center mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#181c3a]">
                    Get the Perfect Shape
                </h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        "https://static5.lenskart.com/media/uploads/Vc-Eye-L1-grid-shape-Rectangle-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Vc-Eye-L1-grid-shape-Round-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Vc-Eye-L1-grid-shape-Round-1-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Vc-Eye-L1-grid-shape-Cateye-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Vc-Eye-L1-grid-shape-Aviators-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Vc-Eye-L1-grid-shape-Geometric-desktop-in-22july.png",
                    ].map((src, i) => (
                        <div key={i} className="w-[120px] sm:w-[150px] md:w-[170px]">
                            <img className="w-full object-contain" src={src} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle Strip */}
            <div className="w-full mt-10">
                <img
                    className="w-full"
                    src="https://static5.lenskart.com/media/uploads/essential-top-Strip-10_1-oe-cms-260825.png"
                    alt=""
                />
            </div>

            {/* Red Offer Section */}
            <div className="text-center bg-[#ca1413] py-14">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
                    Discover other offers
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        "https://static5.lenskart.com/media/uploads/Home-Premium-grid-shop-by-category-B1G2ndlater-13x9-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/Home-Premium-grid-shop-by-category-FREELENS-13x9-desktop-in-22july.png",
                    ].map((src, i) => (
                        <a key={i} href="#" className="w-[260px] md:w-[350px]">
                            <img className="w-full object-cover" src={src} alt="" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Strip */}
            <div className="w-full">
                <img
                    className="w-full"
                    src="https://static5.lenskart.com/media/uploads/desktop-strip-deals-0ffers.png"
                    alt=""
                />
            </div>

            {/* Frame Type Section */}
            <div className="text-center mt-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Shop by Frame Type</h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        "https://static5.lenskart.com/media/uploads/home-premium-steal-deal-sunglasses-3x4-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/home-premium-steal-deal-zeropower-3x4-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/home-premium-steal-deal-eyeglasses-3x4-desktop-in-22july.png",
                    ].map((src, i) => (
                        <a key={i} href="#" className="w-[150px] sm:w-[190px] md:w-[220px]">
                            <img className="w-full object-cover" src={src} alt="" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Best Selling Section */}
            <div className="text-center mt-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    Top 5 Bestselling Looks
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        "https://static5.lenskart.com/media/uploads/3_4-24july.png",
                        "https://static5.lenskart.com/media/uploads/3_4-1-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/3_4-2-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/3_4-3-desktop-in-22july.png",
                        "https://static5.lenskart.com/media/uploads/3_4-1-24july.png",
                    ].map((src, i) => (
                        <a key={i} href="#" className="w-[150px] sm:w-[190px] md:w-[225px]">
                            <img className="w-full object-cover" src={src} alt="" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Style Shade Section */}
            <div className="text-center mt-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Your Style, Your Shade</h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-[1200px] mx-auto">
                    {[
                        "https://static5.lenskart.com/media/uploads/home-all-discover-stories-3x4-alifaizal-desktop-EOSS-9july.png",
                        "https://static5.lenskart.com/media/uploads/home-all-discover-stories-3x4-alifaizal-1-desktop-EOSS-9july.png",
                        "https://static5.lenskart.com/media/uploads/home-all-discover-stories-3x4-alifaizal-2-desktop-EOSS-9july.png",
                        "https://static5.lenskart.com/media/uploads/home-all-discover-stories-3x4-alifaizal-3-desktop-EOSS-9july.png",
                        "https://static5.lenskart.com/media/uploads/home-all-discover-stories-3x4-alifaizal-4-desktop-EOSS-9july.png",
                    ].map((src, i) => (
                        <img
                            key={i}
                            className="w-[130px] sm:w-[180px] md:w-[200px]"
                            src={src}
                            alt=""
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="w-full mt-14">
                <img
                    className="w-full"
                    src="https://static5.lenskart.com/media/uploads/Web_Banner_1920x520-2209.png"
                    alt=""
                />
            </div>
        </main>
    );
}
