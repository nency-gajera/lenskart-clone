import { Check, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LensSelectionModal({
    open,
    onClose,
    product,
    showPackage,
    setShowPackage,
    loading,
}) {

    if (!open) return null;

    // Packages
    const singleVisionPackages = [
        { name: "Anti-Glare Premium", warranty: "6 Months Warranty", desc: "Scratch Resistant", price: 1400, img: "https://static5.lenskart.com/media/uploads/paglens.png" },
        { name: "Lenskart BLU Screen", warranty: "1 Year Warranty", desc: ["1.56 index", "Scratch Resistant"], price: 1500, img: "https://static5.lenskart.com/media/uploads/bluesslens.png" },
        { name: "Thin BLU Screen Lenses", warranty: "Maximum Eye Protection", desc: "Premium Thin Lens", price: 2500, img: "https://static5.lenskart.com/media/uploads/bluthinlens.png" },
        { name: "Photochromic", warranty: "Photochromic lens", desc: "Darkens in sun", price: 2700, img: "https://static5.lenskart.com/media/uploads/Photo-chromatic_LL.png" },
        { name: "OC Clear", warranty: "OC Clear", desc: "Premium clear lens", price: 2500, img: "https://static5.lenskart.com/media/uploads/odclearlens.png" },
    ];

    const progressivePackages = [
        { name: "Progressive Premium", warranty: "Premium comfort for both distance & reading", desc: "Scratch Resistant", price: 3500, img: "https://static5.lenskart.com/media/uploads/bluesslens.png" },
        { name: "Progressive Elite", warranty: "Wide field of view with smooth transitions", desc: "Ultra Clear Vision", price: 5000, img: "https://static5.lenskart.com/media/uploads/bluesslens.png" },
    ];

    const zeroPowerPackages = [
        { name: "Zero Power Anti-Glare", warranty: "Reduces glare from screens", desc: "Anti-reflective coating", price: 1200, img: "https://static5.lenskart.com/media/uploads/bluesslens.png" },
        { name: "Zero Power BLU Cut", warranty: "Blocks harmful blue light", desc: "Scratch resistant", price: 1300, img: "https://static5.lenskart.com/media/uploads/bluesslens.png" },
    ];

    const frameOnly = [
        { name: "Frame Only", desc: "You are purchasing only the frame — no lenses included.", price: product?.price ?? 0, img: "https://static5.lenskart.com/media/uploads/bluesslens.png" },
    ];

    const PACKAGE_MAP = {
        single: singleVisionPackages,
        progressive: progressivePackages,
        zero: zeroPowerPackages,
        frame: frameOnly,
    };

    const navigate = useNavigate();
    const selectedPackages = PACKAGE_MAP[showPackage];

    const [showEyePower, setShowEyePower] = useState(false);
    const [chosenPkg, setChosenPkg] = useState(null);

    const handlePackageClick = (pkg) => {
        setChosenPkg(pkg);
        setShowEyePower(true);
    };

    const headerTitle = () => {
        if (showEyePower) return "Eye Power";
        if (showPackage === null) return "Select Lens Type";
        if (showPackage === "single") return "Choose Lens Package";
        if (showPackage === "progressive") return "Choose Progressive Package";
        if (showPackage === "zero") return "Choose Zero Power Package";
        if (showPackage === "frame") return "Frame Only";
        return "Select Lens Type";
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-[9999] flex justify-end"
            onClick={onClose}
        >
            {/* RIGHT DRAWER (desktop) / FULL SCREEN (mobile) */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    h-full bg-[#fbf9f7] rounded-l-2xl shadow-xl overflow-y-auto
                    animate-[slideIn_0.25s_ease]
                    w-full sm:w-[90%] md:w-[70%] lg:w-[55vw]
                "
            >

                {/* HEADER */}
                <div className="sticky top-0 z-20 bg-[#fbf9f7] flex items-center justify-between px-6 py-5 shadow-sm">
                    {/* Back */}
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            if (showEyePower) {
                                setShowEyePower(false);
                                setChosenPkg(null);
                            } else if (showPackage !== null) {
                                setShowPackage(null);
                            } else {
                                onClose();
                            }
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 20 16">
                            <path d="M9.08475 1.53069L8.08002 0.52832L0.383057 8.20724L0.431756 8.25838L8.08002 15.8887L9.08475 14.8864L3.1025 8.91812H19.0911V7.49894H3.1025L9.08475 1.53069Z" fill="currentColor"></path>
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold text-[#000042]">{headerTitle()}</h2>

                    <span className="text-3xl cursor-pointer" onClick={onClose}>×</span>
                </div>

                {/* LOADING */}
                {loading && (
                    <div className="flex items-center justify-center h-[300px]">
                        <img src="/infinite.gif" className="w-20 opacity-90" />
                    </div>
                )}

                {/* MAIN LENS TYPE OPTIONS */}
                {!loading && showPackage === null && !showEyePower && (
                    <div className="p-6">

                        {/* All options */}
                        {[
                            {
                                key: "single",
                                title: "Single Vision",
                                desc: "For distance or near vision (Thin, anti-glare, blue-cut options)",
                                icon: "https://static.lenskart.com/media/desktop/img/pdp/single_vision.png"
                            },
                            {
                                key: "progressive",
                                title: "Bifocal/Progressive",
                                desc: "Bifocal and Progressives (For two powers in same lenses)",
                                icon: "https://static.lenskart.com/media/desktop/img/pdp/bifocal.png"
                            },
                            {
                                key: "zero",
                                title: "Zero Power",
                                desc: "Block 98% of harmful rays (Anti-glare and blue-cut options)",
                                icon: "https://static.lenskart.com/media/desktop/img/pdp/zero_power.png"
                            },
                            {
                                key: "frame",
                                title: "Frame Only",
                                desc: "Buy only frame",
                                icon: "https://static.lenskart.com/media/desktop/img/pdp/frame_only.png"
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                onClick={() => setShowPackage(item.key)}
                                className="flex justify-between items-center bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition mb-4 cursor-pointer"
                            >
                                <div className="flex gap-3">
                                    <img src={item.icon} className="w-10 h-10" />
                                    <div>
                                        <h3 className="text-base font-semibold text-[#000042]">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>

                                <ChevronRight />
                            </div>
                        ))}

                        {/* CONTACT */}
                        <div className="flex items-center justify-center gap-2 text-[#66668e] text-sm font-semibold mt-6">
                            <span>📞</span> <span>Not sure what to select?</span> <span>Call 99998 99998</span>
                        </div>

                        {/* SUBTOTAL */}
                        <div className="sticky bottom-0 mt-8 bg-[#fbf9f7] py-4">
                            <p className="text-base font-bold">Subtotal (Frame):</p>
                            <p className="text-2xl text-[#000042] mt-1">₹{product?.price}</p>
                        </div>
                    </div>
                )}

                {/* PACKAGE LIST (CHOICE SCREEN) */}
                {!loading && showPackage !== null && !showEyePower && (
                    <div className="p-6 space-y-5">

                        {selectedPackages.map((pkg, idx) => (
                            <div
                                key={idx}
                                onClick={() => handlePackageClick(pkg)}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="flex">
                                    <img src={pkg.img} className="w-40 rounded-l-xl" />
                                    <div className="flex-1 flex flex-col">
                                        
                                        <div className="p-4 border-b">
                                            <h3 className="text-lg font-semibold flex justify-between items-center text-[#000042]">
                                                {pkg.name}
                                                <ChevronRight />
                                            </h3>

                                            <ul className="mt-2 text-sm text-gray-600">
                                                {pkg.warranty && <li>{pkg.warranty}</li>}
                                                {Array.isArray(pkg.desc)
                                                    ? pkg.desc.map((d, i) => <li key={i}>{d}</li>)
                                                    : <li>{pkg.desc}</li>}
                                            </ul>
                                        </div>

                                        <div className="px-4 py-3 bg-gradient-to-r from-transparent to-yellow-100 text-[#333368] font-semibold rounded-b-xl flex justify-between items-center">
                                            <p>Frame + Lens: ₹{pkg.price}</p>
                                            <Check />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* SUBTOTAL */}
                        <div className="sticky bottom-0 bg-[#fbf9f7] py-4">
                            <p className="text-base font-bold">Subtotal (Frame):</p>
                            <p className="text-2xl text-[#000042] mt-1">₹{product?.price}</p>
                        </div>
                    </div>
                )}

                {/* EYE POWER SCREEN */}
                {showEyePower && (
                    <div className="p-6">

                        <h1 className="text-3xl font-semibold text-[#000042] mb-6">
                            What About My Eye Power?
                        </h1>

                        <div className="space-y-5">
                            {[
                                "You can submit your eye power after Payment step",
                                "Power can be submitted within 10 days of order placement",
                                "No additional charges for high/complex power"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#5b5576] flex items-center justify-center text-white">
                                        ✓
                                    </div>
                                    <p className="text-[#333368] font-medium">{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 mt-10 flex justify-between items-center gap-4 bg-[#fbf9f7] py-4">
                            <div>
                                <p className="font-bold text-base">Subtotal:</p>
                                <p className="text-2xl text-[#000042]">₹{product?.price}</p>
                            </div>

                            <button
                                onClick={() => {
                                    navigate("/cart", {
                                        state: {
                                            product,
                                            selectedPackage: chosenPkg,
                                        },
                                    });
                                }}
                                className="bg-[#11ddac] text-white px-8 py-3 rounded-full font-bold"
                            >
                                CONTINUE
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

/* Slide Animation */
