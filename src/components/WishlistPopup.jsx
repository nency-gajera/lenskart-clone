import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPopup() {
  const {
    items,
    remove,
    clear,
    openPopup,
    closeWishlistPopup,
    popupMode
  } = useWishlist(); 

  const navigate = useNavigate();

  if (!openPopup) return null;

  const popupBase =
    "fixed z-[9999] bg-white shadow-xl border rounded-xl overflow-hidden w-64";

  if (popupMode === "left" && items.length > 0) {
    return (
      <div
        className={`
        ${popupBase}
          ${popupBase}
          bottom-4 
          left-4
          md:left-[200px] 
          lg:left-[400px]
          xl:left-[550px]
        `}
      >
        <div className="flex items-center bg-[#333] text-white justify-between px-4 py-3 border-b">
          <h3 className="font-semibold">PRODUCTS ({items.length})</h3>
          <button onClick={closeWishlistPopup} className="px-2 py-1 rounded">
            X
          </button>
        </div>

        <div className="max-h-60 bg-[#eee] overflow-y-auto space-y-2 scrollbar-hide">
          {items.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                closeWishlistPopup();
                navigate(`/eyeglasses/${p.id}`, { state: { product: p } });
              }}
              className="hover:bg-yellow-50 bg-white p-2 flex items-center gap-3 cursor-pointer"
            >
              <img
                src={p.images?.front}
                alt={p.name}
                className="w-16 h-14 object-contain rounded"
              />
              <div className="flex-1 group">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">{p.brand}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      remove(p.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 w-6 h-6 bg-[#329c92] text-white rounded transition"
                  >
                    x
                  </button>
                </div>
                <p className="text-gray-600 text-sm">₹{p.originalPrice}</p>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
          `}
        </style>


        <div className="p-2 border-t bg-[#eee] flex justify-center">
          <button
            onClick={clear}
            className="bg-[#329c92] text-white px-3 py-1 rounded"
          >
            CLEAR LIST
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        ${popupBase}
        bottom-4 
        right-4 
        md:right-[200px]
        lg:right-[400px]
        xl:right-[550px]
      `}
    >
      <div className="flex items-center bg-[#333] text-white px-4 py-3 justify-between border-b">
        <h3 className="font-semibold">PRODUCTS (0)</h3>
        <button onClick={closeWishlistPopup} className="px-2 py-1 rounded">
          X
        </button>
      </div>

      <p className="text-sm py-10 px-5 text-[#333333]">
        You have not selected any products to compare.
        <br />
        Please add products of your choice and view here.
      </p>
    </div>
  );
}
