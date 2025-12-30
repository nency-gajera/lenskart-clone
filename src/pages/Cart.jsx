import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthModal from "../components/AuthModal";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const location = useLocation();
    const navigate = useNavigate();
    const { showAuthModal, setShowAuthModal, setAuthMode, user } = useAuth();
    const { setCartItems } = useCart();


    const { product, selectedPackage } = location.state || {};

    const cartKey = user && user.email ? `lenskart-cart:${user.email}` : `lenskart-cart:guest`;

    const loadCartFromStorage = (key) => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    };

    const [cart, setCart] = useState(() => {
        return loadCartFromStorage(cartKey);
    });

    useEffect(() => {
        const newCart = loadCartFromStorage(cartKey);
        setCart(newCart);
        setCartItems(newCart); 
    }, [user]);

    useEffect(() => {
        localStorage.setItem(cartKey, JSON.stringify(cart));
        setCartItems(cart);
    }, [cart, cartKey]);

    const [removeIndex, setRemoveIndex] = useState(null);
    const [alertMsg, setAlertMsg] = useState("");

    useEffect(() => {
        if (product) {
            const exists = cart.find((p) => p.id === product.id);
            if (!exists) {
                const updated = [...cart, product];
                setCart(updated);
                setCartItems(updated);
            }
        }
    }, [product]);

    const calculateBill = () => {
        let totalPrice = 0;
        let totalDiscount = 0;

        cart.forEach((p) => {
            const base = Number(p.originalPrice) || 0;
            const discountMatch = (p.discount || "").match(/\d+/);
            const percent = discountMatch ? Number(discountMatch[0]) : 0;
            const discAmt = Math.round(base * (percent / 100));

            totalPrice += base;
            totalDiscount += discAmt;
        });

        return {
            totalPrice,
            totalDiscount,
            totalPayable: totalPrice - totalDiscount,
        };
    };

    const bill = calculateBill();

    const confirmRemove = () => {
        const updated = cart.filter((_, i) => i !== removeIndex);
        setCart(updated);
        setRemoveIndex(null);
        setAlertMsg("Item removed from cart!");
        setTimeout(() => setAlertMsg(""), 2000);
    };

    const repeatItem = (item) => {
        const updated = [...cart, { ...item }];
        setCart(updated);
        setAlertMsg("Item added to cart!");
        setTimeout(() => setAlertMsg(""), 1500);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-[#faf8f6] flex flex-col">
                {/* HEADER */}
                <div className="w-full py-2 px-48 flex items-center justify-between border-b bg-white">
                    <Link to="/">
                        <img
                            src="https://static1.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                            className="w-32"
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className="flex flex-col items-center justify-center flex-1 text-center">
                    <h2 className="text-2xl text-[#000042] font-semibold mb-6">
                        Your shopping cart is empty!!
                    </h2>

                    {!user ? (
                        <div className="space-y-4">
                            <p className="text-gray-600">Login to see items from your existing bag and wishlist</p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => {
                                        setAuthMode("login");
                                        setShowAuthModal(true);
                                    }}
                                    className="bg-[#11ddac] px-6 py-3 text-lg text-[#000042] rounded-full"
                                >
                                    Login / Signup
                                </button>
                                <button
                                    onClick={() => navigate("/", { replace: true })}
                                    className="bg-gray-200 px-6 py-3 text-lg text-[#000042] rounded-full"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/", { replace: true })}
                            className="bg-[#11ddac] px-8 py-4 text-lg text-[#000042] rounded-full"
                        >
                            Continue Shopping
                        </button>
                    )}
                </div>

                <AuthModal />
            </div>
        );
    }

    return (
        <div className="w-full bg-[#faf8f6] min-h-screen pb-28">
            {/* TOP ALERT */}
            {alertMsg && (
                <div className="w-full bg-blue-100 text-blue-800 text-center py-3 font-medium">
                    {alertMsg}
                </div>
            )}

            {/* HEADER */}
            <div className="w-full py-2 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 flex items-center justify-between border-b bg-white">

                <Link to="/">
                    <img
                        src="https://static1.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                        className="w-28 md:w-40"
                        alt="logo"
                    />
                </Link>
                

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 pl-2">
                        <img
                            src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg"
                            alt=""
                        />
                        <span className="text-[#66668e]">100% safe</span>
                    </div>
                    <img 
                        src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/toll_phone.png" 
                        alt="" 
                        className="w-28 md:w-40"    
                    />
                </div>
            </div>

            {/* MAIN GRID */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-6">
                {/* LEFT SIDE CART ITEMS */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">Cart ({cart.length} items)</h2>

                    {cart.map((item, index) => (
                        <div key={index} className="bg-white p-5 rounded-xl shadow-sm relative mb-4">
                            {removeIndex === index ? (
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-semibold text-[#000042]">Remove Item From Cart?</h3>

                                    <p className="text-gray-600 mt-2">Instead, you could wishlist this item and access it later</p>

                                    <div className="flex gap-4 justify-center mt-6">
                                        <button className="border border-gray-400 px-6 py-2 rounded-full" onClick={confirmRemove}>
                                            Yes, remove
                                        </button>

                                        <button className="bg-[#000042] text-white px-6 py-2 rounded-full" onClick={() => setRemoveIndex(null)}>
                                            Move to wishlist
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // NORMAL ITEM CARD
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <img src={item.images?.side || item.images?.front} className="w-60 object-contain rounded-md" alt="" />

                                    <div className="flex-1">
                                        <h3 className="p-2 text-lg text-[#000042] flex flex-col">
                                            <div className="flex justify-between">
                                                <span>{item.name}</span>
                                                <span>₹{item.originalPrice}</span>
                                            </div>

                                            <div className="flex gap-1">
                                                <span>{item.brand}</span>
                                                <span>- {item.id}</span>
                                                <span>{item.frameType}</span>
                                            </div>
                                        </h3>

                                        {selectedPackage && (
                                            <p className="p-2 text-sm flex justify-between">
                                                <span>{selectedPackage.name}</span>
                                                <span>₹0</span>
                                            </p>
                                        )}

                                        <p className="text-sm border-b p-2">You can upload prescription after payment</p>

                                        <div className="mt-3 flex justify-between p-2 border-b">
                                            <p className="font-bold text-[#333368]">Final Price</p>
                                            <p className="font-bold text-[#000042]">₹{item.originalPrice}</p>
                                        </div>

                                        <div className="flex gap-3 p-2 font-semibold text-[#000042]">
                                            <button className="underline" onClick={() => setRemoveIndex(index)}>
                                                Remove
                                            </button>

                                            <span>|</span>

                                            <button className="underline" onClick={() => repeatItem(item)}>
                                                Repeat
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* LOGIN PROMPT — ONLY SHOW IF USER NOT LOGGED IN */}
                    {!user && (
                        <div
                            className="bg-white rounded-xl shadow-sm p-4 mt-5 flex items-center justify-between cursor-pointer"
                            onClick={() => {
                                setAuthMode("login");
                                setShowAuthModal(true);
                            }}
                        >
                            <p className="text-[#333368] font-medium">Login to see items from your existing bag and wishlist</p>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border">→</button>
                        </div>
                    )}
                </div>

                {/* RIGHT BILL BOX */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-xl font-bold mb-4">Bill Details</h3>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex justify-between py-2 border-b">
                            <span>Frame Price</span>
                            <span>₹{bill.totalPrice}</span>
                        </div>

                        <div className="flex justify-between py-2 border-b">
                            <span>Total discount</span>
                            <span className="text-green-600">-₹{bill.totalDiscount}</span>
                        </div>

                        <div className="flex justify-between text-lg font-bold">
                            <span>Total payable</span>
                            <span className="text-[#000042]">₹{bill.totalPayable}</span>
                        </div>
                    </div>

                    {/* GOLD */}
                    <div className="bg-[#fff3d8] p-5 rounded-xl shadow-sm border border-yellow-300">
                        <h4 className="font-semibold text-[#000042]">Add Gold Max Membership</h4>
                        <p className="text-[#66668e] text-sm mt-1">Avail Buy 1 Get 1 Free + 10% Cashback</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="font-medium text-[#000042]">Add Gold</p>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full border">→</button>
                        </div>
                    </div>

                    {/* BLACK */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border flex justify-between">
                        <div>
                            <p className="font-semibold text-[#000042]">BLACK applied</p>
                            <p className="text-green-600 text-sm">You are saving ₹{bill.totalDiscount}</p>
                        </div>
                        <button className="text-blue-700 font-semibold">REMOVE</button>
                    </div>

                    {/* INSURANCE */}
                    <div className="bg-white p-5 rounded-xl shadow-sm border flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-[#000042]">Apply Insurance</p>
                            <p className="text-gray-500 text-sm">Tap to view your benefits</p>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border">→</button>
                    </div>

                    <button className="w-full bg-[#11ddac] py-4 rounded-3xl text-[#000042] text-lg">Proceed To Checkout</button>
                </div>
            </div>

            {/* AUTH MODAL */}
            <AuthModal />
        </div>
    );
}
