import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Heart, Menu } from "lucide-react";

export default function Navbar() {
  const { user, logout, setShowAuthModal, setAuthMode } = useAuth();
  const { items, openWishlistPopup } = useWishlist();
  const { cartItems } = useCart();

  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMobileMenu(false);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/eyeglasses?search=${query}`);
    }
  };



  const openLogin = () => {
    setAuthMode("login");
    setShowAuthModal(true);
  };

  return (
    <>
      <div className="w-full bg-white top-0 sticky z-[9999] shadow">

        {/* ---------- TOP BAR (desktop only) ---------- */}
        <div
          className="py-2 px-3 hidden md:flex justify-between items-center text-[13px]"
          style={{ color: "#000042" }}
        >
          <div className="flex gap-2 flex-wrap">
            <a href="#">Corporate |</a>
            <a href="#"> StoreLocator |</a>
            <a href="#"> Singapore |</a>
            <a href="#"> UAE |</a>
            <a href="#"> John Jacobs |</a>
            <a href="#"> Aqualens |</a>
            <a href="#"> Cobrowsing |</a>
            <a href="#"> Engineering Blog |</a>
            <a href="#"> Partner With Us</a>
          </div>

          <Link to="/contactus">Contact Us</Link>
        </div>

        {/* ---------- MAIN NAVBAR ---------- */}
        <div className="flex items-center justify-between px-4 md:px-4 py-1 gap-4">
          {/* LOGO */}
          <Link to="/">
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="Home"
              className="w-28 md:w-40"
            />
          </Link>

          <img
            src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/toll_phone.png"
            alt=""
            className="w-28 md:w-40"
          />

          {/* SEARCH (desktop only) */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full border rounded-full px-4 py-2 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />

          </div>

          {/* ---------- DESKTOP RIGHT SIDE ---------- */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">

            <button>Track Order</button>

            {/* Auth */}
            {!user ? (
              <button
                onClick={openLogin}
                className="hover:text-teal-600"
              >
                Sign In & Sign Up
              </button>
            ) : (
              <div className="relative group">
                <span className="cursor-pointer font-medium">{user.name}</span>

                {/* Dropdown */}
                <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm py-2 z-50">
                  <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                    My Orders
                  </Link>
                  <Link to="/prescription" className="block px-4 py-2 hover:bg-gray-100">
                    My Prescription
                  </Link>
                  <Link to="/store-credit" className="block px-4 py-2 hover:bg-gray-100">
                    My Store Credit
                  </Link>
                  <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">
                    Account Information
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Wishlist */}
            <button onClick={openWishlistPopup}>
              <span className="relative inline-flex">
                <Heart className="w-5 h-5" />

                {items.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-teal-500 text-white text-xs rounded-full px-1.5">
                    {items.length}
                  </span>
                )}
              </span>

              <span className="pl-2">Wishlist</span>
            </button>

            {/* Cart */}
            <Link to="/cart">
              <span className="relative inline-flex">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 9V6C16 3.79 14.21 2 12 2S8 3.79 8 6v3M3.59 10.35L2.99 16.75c-.17 1.82-.26 2.73.04 3.43.27.62.73 1.13 1.32 1.45.67.37 1.58.37 3.41.37h8.46c1.83 0 2.74 0 3.41-.37.59-.32 1.05-.83 1.32-1.45.3-.7.21-1.61.04-3.43l-.6-6.4c-.14-1.54-.21-2.31-.55-2.88-.3-.49-.74-.9-1.28-1.16C18 6 17.24 6 15.69 6H8.31C6.76 6 6 6 5.45 6.29c-.54.26-.98.67-1.28 1.16-.34.57-.41 1.34-.55 2.88z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-teal-500 text-white text-xs rounded-full px-1.5">
                    {cartItems.length}
                  </span>
                )}
              </span>

              <span className="pl-3">Cart</span>
            </Link>
          </div>

          {/* ---------- MOBILE HAMBURGER ---------- */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Menu />
          </button>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        {mobileMenu && (
          <div className="md:hidden bg-white px-4 py-4 shadow-lg text-sm">

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full px-4 py-2 mb-4"
            />

            {/* Links */}
            <div className="flex flex-col gap-4 font-semibold">
              <Link to="/eyeglasses" onClick={closeMenu}>Eye Glasses</Link>
              <Link to="/screenglasses" onClick={closeMenu}>Screen Glasses</Link>
              <Link to="/kidsglasses" onClick={closeMenu}>Kids Glasses</Link>
              <Link to="/contactlenses" onClick={closeMenu}>Contact Lenses</Link>
              <Link to="/sunglasses" onClick={closeMenu}>Sunglasses</Link>
              <Link to="/homeeyetest" onClick={closeMenu}>Home Eye-Test</Link>
              <Link to="/storelocator2" onClick={closeMenu}>Store Locator</Link>
              <Link to="/sale" onClick={closeMenu}>Sale</Link>
            </div>

            {/* Account Section */}
            <div className="mt-4 flex flex-col gap-3 border-t pt-4">
              <button onClick={closeMenu}>Track Order</button>

              {!user ? (
                <button onClick={() => { openLogin(); closeMenu(); }}>
                  Sign In / Sign Up
                </button>
              ) : (
                <>
                  <Link to="/orders" onClick={closeMenu}>My Orders</Link>
                  <Link to="/account" onClick={closeMenu}>Account</Link>
                  <button onClick={() => { logout(); closeMenu(); }} className="text-red-600">
                    Logout
                  </button>
                </>
              )}

              <button onClick={() => { openWishlistPopup(); closeMenu(); }}>
                Wishlist ({items.length})
              </button>

              <Link to="/cart" onClick={closeMenu}>Cart ({cartItems.length})</Link>
              <Link to="/contactus" onClick={closeMenu}>Contact Us</Link>
            </div>
          </div>
        )}


        {/* ---------- BOTTOM BAR (desktop only) ---------- */}
        <div className="px-4 mt-1.5 bg-[#fbf9f7] hidden md:block">
          <div className="flex items-center justify-between py-3">
            <div className="flex gap-5 font-bold text-[#000042] uppercase text-sm">
              <Link to="/eyeglasses" className="hover:underline">Eye Glasses</Link>
              <Link to="/screenglasses" className="hover:underline">Screen Glasses</Link>
              <Link to="/kidsglasses" className="hover:underline">Kids Glasses</Link>
              <Link to="/contactlenses" className="hover:underline">Contact Lenses</Link>
              <Link to="/sunglasses" className="hover:underline">Sunglasses</Link>
              <Link to="/homeeyetest" className="hover:underline">Home Eye-Test</Link>
              <Link to="/storelocator2" className="hover:underline">Store Locator</Link>
              <Link to="/sale" className="hover:underline">Sale</Link>
            </div>

            <div className="flex items-center gap-4">
              <img
                className="h-8 object-contain"
                src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
                alt=""
              />
              <img
                className="h-8 object-contain"
                src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
                alt=""
              />
              <img
                className="h-8 object-contain"
                src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
                alt=""
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
