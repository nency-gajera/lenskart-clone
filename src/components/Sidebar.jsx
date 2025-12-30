import React from "react";

export default function Sidebar({
    filters = {},
    counts = {},
    onFilterChange,
    mobileOpen = false,
    onClose = () => {},
}) {
    const safeCounts = {
        frameType: counts.frameType || {},
        frameShape: counts.frameShape || {},
        frameColor: counts.frameColor || {},
        brand: counts.brand || {},
        gender: counts.gender || {},
        size: counts.size || {},
    };

    // Detect mobile
    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768;

    const boxOption = (group, value, img) => {
        const selected = filters[group]?.includes(value);
        return (
            <button
                type="button"
                onClick={() => {
                    onFilterChange(group, value);
                    if (isMobile) onClose(); // AUTO CLOSE on mobile
                }}
                className="w-[68px] flex-shrink-0"
                aria-pressed={selected}
            >
                <div
                    className={`flex flex-col items-center justify-center rounded-md p-1 transition-all
                    ${
                        selected
                            ? "ring-2 ring-teal-200"
                            : "border border-gray-300 bg-white"
                    }`}
                >
                    <div className="w-[56px] h-[28px] flex items-center justify-center">
                        <img
                            src={img}
                            alt={value}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <div className="mt-1 text-xs text-center text-gray-700 truncate w-full">
                        {value}
                    </div>
                </div>
            </button>
        );
    };

    return (
        <aside
            className={`
                bg-white h-full min-h-[calc(100vh-4rem)] overflow-y-auto
                w-64 md:w-64 lg:w-64 px-3 py-4
                border-r border-gray-200
                ${mobileOpen ? "block" : "hidden md:block"}
            `}
            aria-hidden={
                !mobileOpen &&
                typeof window !== "undefined" &&
                window.innerWidth < 768
            }
        >
            {/* Mobile-only header */}
            <div className="md:hidden flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold tracking-wider text-gray-600">
                    Filters
                </h3>
                <button
                    onClick={onClose}
                    aria-label="Close filters"
                    className="p-2"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="text-gray-700"
                    >
                        <path
                            d="M6 18L18 6M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* FRAME TYPE */}
            <div className="mb-5">
                <div className="text-sm font-bold text-gray-600 mb-2">
                    FRAME TYPE
                </div>
                <div className="flex gap-2 flex-wrap">
                    {boxOption(
                        "frameType",
                        "Full Rim",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
                    )}
                    {boxOption(
                        "frameType",
                        "Rimless",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
                    )}
                    {boxOption(
                        "frameType",
                        "Half Rim",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
                    )}
                </div>
            </div>

            {/* FRAME SHAPE */}
            <div className="mb-5">
                <div className="text-sm font-bold text-gray-600 mb-2">
                    FRAME SHAPE
                </div>
                <div className="flex gap-2 flex-wrap">
                    {boxOption(
                        "frameShape",
                        "Square",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Rectangle",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Cat Eye",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Round",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Geometric",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Aviator",
                        "https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Clubmaster",
                        "https://static1.lenskart.com/media/desktop/img/Dec20/app/Shape/Clubmaster.png"
                    )}
                    {boxOption(
                        "frameShape",
                        "Oval",
                        "https://static1.lenskart.com/media/desktop/img/Dec20/app/Shape/Oval.png"
                    )}
                </div>
            </div>

            {/* FRAME COLOR */}
            <div className="mb-5">
                <div className="text-sm font-bold text-gray-600 mb-2">
                    FRAME COLOR
                </div>
                <div className="flex flex-col gap-2">
                    {Object.keys(safeCounts.frameColor).length === 0 && (
                        <div className="text-xs text-gray-400">
                            No colors
                        </div>
                    )}
                    {Object.keys(safeCounts.frameColor).map((color) => (
                        <label
                            key={color}
                            className="flex items-center gap-3 cursor-pointer select-none"
                            onClick={() => {
                                onFilterChange("frameColor", color);
                                if (isMobile) onClose();
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={filters.frameColor?.includes(color)}
                                readOnly
                                className="w-4 h-4 accent-teal-400"
                            />
                            <span className="text-sm text-gray-700">
                                {color}
                                <span className="text-xs text-gray-400">
                                    ({safeCounts.frameColor[color]})
                                </span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* BRANDS */}
            <div className="mb-5">
                <div className="text-sm font-bold text-gray-600 mb-2">
                    BRANDS
                </div>
                <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-2">
                    {Object.keys(safeCounts.brand).length === 0 && (
                        <div className="text-xs text-gray-400">
                            No brands
                        </div>
                    )}
                    {Object.keys(safeCounts.brand).map((b) => (
                        <label
                            key={b}
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => {
                                onFilterChange("brand", b);
                                if (isMobile) onClose();
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={filters.brand?.includes(b)}
                                readOnly
                                className="w-4 h-4 accent-teal-400"
                            />
                            <span className="text-sm text-gray-700">
                                {b}
                                <span className="text-xs text-gray-400">
                                    ({safeCounts.brand[b]})
                                </span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* GENDER */}
            <div className="mb-5">
                <div className="text-sm font-bold text-gray-600 mb-2">
                    GENDER
                </div>
                <div className="flex flex-col gap-2">
                    {Object.keys(safeCounts.gender).map((g) => (
                        <label
                            key={g}
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => {
                                onFilterChange("gender", g);
                                if (isMobile) onClose();
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={filters.gender?.includes(g)}
                                readOnly
                                className="w-4 h-4 accent-teal-400"
                            />
                            <span className="text-sm text-gray-700">
                                {g}
                                <span className="text-xs text-gray-400">
                                    ({safeCounts.gender[g]})
                                </span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}
