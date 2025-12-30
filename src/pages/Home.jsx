import React from "react";
import HeroSlider from "../components/HeroSlider";
import WearTheTrend from "../components/WearTheTrends";
import OurBrands from "../components/OurBrands";
import Footer2 from "../components/Footer2";

export default function Home() {
    const categories = [
        { img: "https://static5.lenskart.com/media/uploads/image_2815eye.png", title: " Eyeglasses" },
        { img: "https://static5.lenskart.com/media/uploads/Frame_1991634409zp.png", title: "Zero Power" },
        { img: "https://static5.lenskart.com/media/uploads/image_2817-cl.png", title: "Contact Lenses" },
        { img: "https://static5.lenskart.com/media/uploads/image_2818-kids.png", title: "Kids Glasses" },
        { img: "https://static5.lenskart.com/media/uploads/image_2816-sun.png", title: "Sunglasses" },
        { img: "https://static5.lenskart.com/media/uploads/image-Prog.png", title: "Progressive" },
    ];

    return (
        <div>

            {/* CATEGORY SLIDER */}
            <div className="w-full bg-[#fafafa] py-2 border-b border-[#eee]">
                <div className="flex gap-5 overflow-x-auto px-5 scroll-smooth [&::-webkit-scrollbar]:hidden">
                    {categories.map((c, i) => (
                        <div
                            className="min-w-40 bg-white p-3 rounded-2xl shadow-md text-center cursor-pointer 
                                border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition"
                            key={i}
                        >
                            <img
                                className="w-[90%] h-[100px] object-contain mx-auto mb-2"
                                src={c.img}
                                alt={c.title}
                            />
                            <p className="text-sm font-medium tracking-[0.5px] text-gray-500">
                                {c.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* HERO SLIDER */}
            <HeroSlider />

            {/* WEAR THE TREND */}
            <WearTheTrend />

            {/* REPEATING BANNERS WITH HEADINGS */}
            {[
                {
                    title: "Free Lens Replacement at Stores",
                    img: "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hustlrswitch-GJ-150525.png",
                },
                {
                    title: "Buy One Get One Free",
                    img: "https://static5.lenskart.com/media/uploads/1920x520-desktop-banner.png",
                },
                {
                    title: "Book Eye Test at Home",
                    img: "https://static5.lenskart.com/media/uploads/hechome11.png",
                },
                {
                    title: "As Seen on Shark Tank",
                    img: "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
                },
                {
                    title: "Trending Sunglasses",
                    img: "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif",
                },
            ].map((section, index) => (
                <div className="mt-12 text-center" key={index}>
                    <h4 className="flex items-center gap-3 text-2xl md:text-3xl uppercase font-medium 
          justify-center w-full text-gray-700">
                        <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                        {section.title}
                        <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                    </h4>
                    <img className="mt-5 w-full" src={section.img} alt={section.title} />
                </div>
            ))}

            {/* PERFECT FIT GRID */}
            <div className="mt-12 text-center">
                <h4 className="flex items-center gap-3 text-2xl md:text-3xl uppercase font-medium 
        justify-center w-full text-gray-700">
                    <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                    Find the Perfect Fit
                    <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                </h4>

                <div className="mt-6 flex flex-col md:flex-row gap-4 w-[95%] md:w-[80%] mx-auto">
                    {/* LEFT COLUMN */}
                    <div className="md:w-1/2 w-full flex flex-col gap-3">
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
                            alt=""
                        />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="md:w-1/2 w-full flex flex-col gap-3">
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* BUY IT YOUR WAY GRID */}
            <div className="mt-12 text-center">
                <h4 className="flex items-center gap-3 text-2xl md:text-3xl uppercase font-medium 
        justify-center w-full text-gray-700">
                    <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                    Buy It Your Way
                    <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                </h4>

                <div className="mt-6 flex flex-col md:flex-row gap-4 w-[95%] md:w-[80%] mx-auto">
                    {/* LEFT COLUMN */}
                    <div className="md:w-1/2 w-full flex flex-col gap-3">
                        <img
                            className="w-full rounded-md"
                            src="https://static5.lenskart.com/media/uploads/bbbgt6.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"
                            alt=""
                        />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="md:w-1/2 w-full flex flex-col gap-3">
                        <img
                            className="w-full rounded-md"
                            src="https://static5.lenskart.com/media/uploads/bochat1.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-md"
                            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* OUR BRANDS IMAGE */}
            <div className="mt-12 text-center">
                <h4 className="flex items-center gap-3 text-2xl md:text-3xl uppercase font-medium 
        justify-center w-full text-gray-700">
                    <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                    Our Brands
                    <span className="hidden sm:block flex-1 h-px bg-gray-500"></span>
                </h4>

                <img
                    className="mt-5 w-full"
                    src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
                    alt=""
                />
            </div>

            {/* BRAND CAROUSEL */}
            <OurBrands />

            {/* LAST BANNER */}
            <div className="mt-10 mb-2">
                <img
                    className="w-full"
                    src="https://static5.lenskart.com/media/uploads/reachcs1.jpg"
                    alt=""
                />
            </div>
            <Footer2 />
        </div>
    );
}
