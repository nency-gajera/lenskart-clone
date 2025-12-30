import React, { useState, useEffect, useRef } from "react";

export default function HeroSlider() {
    const originalImages = [
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-black-friday-rush_30112025_rat.png",
        "https://static5.lenskart.com/media/uploads/Meller_Desktop_Home_Banner-123456.png",
        "https://static5.lenskart.com/media/uploads/Frame_1991634538.png",
        "https://static5.lenskart.com/media/uploads/Desktop_Banner_Bidri-131125-gta.gif",
        "https://static5.lenskart.com/media/uploads/Frame_1991634539-5454.png",
        "https://static5.lenskart.com/media/uploads/WEB_hero_BANNER_hip_hop.gif",
        "https://static5.lenskart.com/media/uploads/web_banner-bitz-IN-1010.gif",
        "https://static5.lenskart.com/media/uploads/IMG_1375_(2)-4321.GIF",
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-zodiac-16sep25.png",
        "https://static5.lenskart.com/media/uploads/Desktop_Cyborg_16092025.png",
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-postcard-16sep25.png",
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-harrypotter-16sep25.png",
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-superman-16sep25.png",
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hustlr-16sep25.png",
        "https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hellokitty-16sep25.png"
    ];

    const images = [
        originalImages[originalImages.length - 1],
        ...originalImages,
        originalImages[0],
    ];

    const [index, setIndex] = useState(1);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const trackRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => goToNext(), 4000);
        return () => clearInterval(timer);
    });

    const goToNext = () => {
        setIndex((prev) => prev + 1);
        setTransitionEnabled(true);
    };

    const goToPrev = () => {
        setIndex((prev) => prev - 1);
        setTransitionEnabled(true);
    };

    useEffect(() => {
        if (index === images.length - 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setIndex(1);
            }, 600);
        }
        if (index === 0) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setIndex(originalImages.length);
            }, 600);
        }
    }, [index]);


    return (
        <div
            className="
                w-full 
                relative 
                overflow-hidden 
                h-[200px]       
                sm:h-[300px]    
                md:h-[380px]    
                lg:h-[480px]    
                xl:h-[550px]    
            "
        >
            <div
                ref={trackRef}
                className="flex w-full h-full"
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: transitionEnabled ? "transform 0.6s ease-in-out" : "none",
                }}
            >
                {images.map((img, i) => (
                    <div className="min-w-full h-full" key={i}>
                        <img
                            className="w-full h-full object-cover block"
                            src={img}
                            alt=""
                        />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                className="
                    absolute top-1/2 -translate-y-1/2 
                    text-white  
                    rounded-full 
                    p-1 
                    sm:p-2 
                    md:p-3 
                    lg:p-4
                    text-xl 
                    sm:text-3xl 
                    md:text-4xl 
                    lg:text-5xl
                    left-2 sm:left-4 lg:left-6
                    z-10
                "
                onClick={goToPrev}
            >
                ❮
            </button>

            {/* Right Arrow */}
            <button
                className="
                    absolute top-1/2 -translate-y-1/2 
                    text-white 
                    rounded-full 
                    p-1 
                    sm:p-2 
                    md:p-3 
                    lg:p-4
                    text-xl 
                    sm:text-3xl 
                    md:text-4xl 
                    lg:text-5xl
                    right-2 sm:right-4 lg:right-6
                    z-10
                "
                onClick={goToNext}
            >
                ❯
            </button>
        </div>
    );
}
