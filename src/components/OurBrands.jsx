import React, { useState } from "react";

export default function OurBrands() {
    const eyeglasses = [
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-full-rim-geometric-vincent-chase-sleek-steel-vc-e13785-c1-eyeglasses_gm_5964.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12395-c2-eyeglasses_g_4493.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-full-rim-geometric-vincent-chase-sleek-steel-vc-e13786-c2-eyeglasses_ccg_3318.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-silver-full-rim-square-vincent-chase-sleek-steel-vc-e16002-c2-eyeglasses_g_3149_09_21_23.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Transparent-Blue-Full-Rim-Rectangle-Vincent-Chase-Classic-Acetate-VC-E13676-C3-Eyeglasses_vincent-chase-vc-e13676-c3-c3-eyeglasses_G_924107_02_2022.jpg" }
    ];

    const sunglasses = [
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_g_0998_02_02_23.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-full-rim-wayfarer-vincent-chase-polarized-athleisure-vc-s14459-c7-sunglasses_g_2628_9_29_22.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-round-vincent-chase-the-metal-edit-vc-s13137-c3-sunglasses_vincent-chase-vc-s13137-c3-c3-sunglasses_sunglasses_g_8708_5july23.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Gold-Black-Grey-Gradient-Full-Rim-Square-Vincent-Chase-Polarized-VINTAGE-VC-S11748-C4-Polarized-Sunglasses_vincent-chase-vc-s11748-c4-sunglasses_sunglasses_G_126118_02_2022.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-grey-full-rim-round-vincent-chase-polarized-the-metal-edit-vc-s13112-c4-polarized-sunglasses_vincent-chase-vc-s13112-c4-sunglasses_sunglasses_j_3396_1_1_5july23.jpg" },
        { img: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/black-brown-full-rim-square-lenskart-studio-lenskart-hustlr-vc-s15999-c1-sunglasses_g_7305_09_26_23.jpg" }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [startIndex1, setStartIndex1] = useState(0);

    const next = () => {
        if (startIndex + 3 < eyeglasses.length) setStartIndex(startIndex + 3);
    };

    const prev = () => {
        if (startIndex - 3 >= 0) setStartIndex(startIndex - 3);
    };

    const next1 = () => {
        if (startIndex1 + 3 < sunglasses.length) setStartIndex1(startIndex1 + 3);
    };

    const prev1 = () => {
        if (startIndex1 - 3 >= 0) setStartIndex1(startIndex1 - 3);
    };

    const visibleItems = eyeglasses.slice(startIndex, startIndex + 3);
    const visibleItems1 = sunglasses.slice(startIndex1, startIndex1 + 3);

    return (
        <div className="w-full">
            {/* Eyeglasses Title */}
            <div className="flex justify-between border-b border-gray-300 w-[90%] mx-auto mt-10 pb-2">
                <span className="text-xl font-semibold">EYEGLASSES</span>
                <span className="text-lg text-teal-600">View Range</span>
            </div>

            {/* Eyeglasses Slider */}
            <div className="w-full flex items-center justify-center gap-3 p-5">
                
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="w-10 h-10 bg-no-repeat bg-center bg-[length:35px] md:bg-[length:45px] 
                               bg-[url('https://static.lenskart.com/media/desktop/img/menu/icon-arrow-left.svg')]">
                </button>

                <div className="flex justify-center gap-4 w-[75%] md:w-[80%]">
                    {visibleItems.map((item, i) => (
                        <div key={i} className="w-full md:w-1/3">
                            <img src={item.img} className="w-full" alt="" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="w-10 h-10 bg-no-repeat bg-center bg-[length:35px] md:bg-[length:45px] 
                               bg-[url('https://static.lenskart.com/media/desktop/img/menu/icon-arrow-right.svg')]">
                </button>
            </div>

            {/* Sunglasses Title */}
            <div className="flex justify-between border-b border-gray-300 w-[90%] mx-auto mt-10 pb-2">
                <span className="text-xl font-semibold">SUNGLASSES</span>
                <span className="text-lg text-teal-600">View Range</span>
            </div>

            {/* Sunglasses Slider */}
            <div className="w-full flex items-center justify-center gap-3 p-5">
                
                {/* Left Arrow */}
                <button
                    onClick={prev1}
                    className="w-10 h-10 bg-no-repeat bg-center bg-[length:35px] md:bg-[length:45px] 
                               bg-[url('https://static.lenskart.com/media/desktop/img/menu/icon-arrow-left.svg')]">
                </button>

                <div className="flex justify-center gap-4 w-[75%] md:w-[80%]">
                    {visibleItems1.map((item, i) => (
                        <div key={i} className="w-full md:w-1/3">
                            <img src={item.img} className="w-full" alt="" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next1}
                    className="w-10 h-10 bg-no-repeat bg-center bg-[length:35px] md:bg-[length:45px] 
                               bg-[url('https://static.lenskart.com/media/desktop/img/menu/icon-arrow-right.svg')]">
                </button>
            </div>
        </div>
    );
}
