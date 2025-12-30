import React, { useState } from "react";

export default function WearTheTrend() {
    const items = [
        { name: "Round", img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png" },
        { name: "Cat-Eye", img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg" },
        { name: "Clubmaster", img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg" },
        { name: "Transparent", img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg" },

        { name: "Blend Edit", img: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg" },
        { name: "Air Clip On", img: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg" },
        { name: "Air Flex", img: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg" },
        { name: "Retro Aviator", img: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg" },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        if (startIndex + 4 < items.length) {
            setStartIndex(startIndex + 4);
        }
    };

    const prev = () => {
        if (startIndex - 4 >= 0) {
            setStartIndex(startIndex - 4);
        }
    };

    const visibleItems = items.slice(startIndex, startIndex + 4);

    return (
        <div className="w-full bg-white flex flex-col md:flex-row items-center gap-6 px-5 py-10 relative">

            {/* LEFT TITLE */}
            <div className="md:w-1/5 w-full  md:text-left text-center">
                <div className="text-[42px] md:text-[50px] font-bold leading-none font-serif">
                    WEAR THE
                </div>

                <div className="-mt-2 text-[42px] md:text-[50px] font-bold leading-none font-serif">
                    TREND
                </div>

                <div className="text-gray-600 text-base font-medium mt-1">
                    Our hottest collections
                </div>
            </div>

            {/* LEFT ARROW (Desktop) */}
            <button
                onClick={prev}
                className="hidden md:flex items-center justify-center w-12 h-12"
            >
                <img
                    src="https://static.lenskart.com/media/desktop/img/menu/icon-arrow-left.svg"
                    alt="left"
                    className="w-10 h-10 opacity-70 hover:opacity-100 transition"
                />
            </button>

            {/* ITEM CARDS */}
            <div className="md:w-3/5 w-full flex flex-wrap justify-center md:justify-between gap-5">
                {visibleItems.map((item, i) => (
                    <div
                        key={i}
                        className="
                            w-[46%] sm:w-[30%] md:w-[22%]
                            text-center transition-transform duration-200 
                            hover:-translate-y-1
                        "
                    >
                        <img src={item.img} alt={item.name} className="w-full rounded" />
                        <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>

                        <button className="mt-2 bg-teal-500 text-white px-4 py-2 rounded">
                            Explore
                        </button>
                    </div>
                ))}
            </div>

            {/* RIGHT ARROW (Desktop) */}
            <button
                onClick={next}
                className="hidden md:flex items-center justify-center w-12 h-12"
            >
                <img
                    src="https://static.lenskart.com/media/desktop/img/menu/icon-arrow-right.svg"
                    alt="right"
                    className="w-10 h-10 opacity-70 hover:opacity-100 transition"
                />
            </button>

            {/* LEFT ARROW (Mobile) */}
            <button
                onClick={prev}
                className="
                    md:hidden absolute left-3 top-1/2 -translate-y-1/2
                    flex items-center justify-center
                "
            >
                <img
                    src="https://static.lenskart.com/media/desktop/img/menu/icon-arrow-left.svg"
                    className="w-8 h-8 opacity-70"
                />
            </button>

            {/* RIGHT ARROW (Mobile) */}
            <button
                onClick={next}
                className="
                    md:hidden absolute right-3 top-1/2 -translate-y-1/2
                    flex items-center justify-center
                "
            >
                <img
                    src="https://static.lenskart.com/media/desktop/img/menu/icon-arrow-right.svg"
                    className="w-8 h-8 opacity-70"
                />
            </button>
        </div>
    );
}
