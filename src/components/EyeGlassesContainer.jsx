import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import Sidebar from "./Sidebar";
import WishlistPopup from "./WishlistPopup";
import { Heart, Menu } from "lucide-react";

export default function EyeGlassesContainer() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [filters, setFilters] = useState({
    frameType: [],
    frameShape: [],
    frameColor: [],
    brand: [],
    gender: [],
    size: []
  });

  const [enabled, setEnabled] = useState(false);
  const [counts, setCounts] = useState({});
  const itemsPerLoad = 15;
  const { toggle, isInWishlist } = useWishlist();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:3000/lenskart")
      .then(res => res.json())
      .then(data => {
        const fetched = data.lenskart || data || [];
        setItems(fetched);
        setFiltered(fetched);
        setVisibleItems(fetched.slice(0, itemsPerLoad));
        calculateCounts(fetched);
      })
      .catch(err => {
        console.error("Failed to fetch items", err);
        setItems([]);
        setFiltered([]);
        setVisibleItems([]);
      });
  }, []);

  const calculateCounts = (items) => {
    const newCounts = {
      frameType: {},
      frameShape: {},
      frameColor: {},
      brand: {},
      gender: {},
      size: {},
    };

    items.forEach(item => {
      const add = (group, value) => {
        if (!value) return;
        newCounts[group][value] = (newCounts[group][value] || 0) + 1;
      };
      add("frameType", item.frameType);
      add("frameShape", item.shape);
      add("frameColor", item.color);
      add("brand", item.brand);
      add("gender", item.gender);
      add("size", item.size);
    });

    setCounts(newCounts);
  };

  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get("search")?.toLowerCase() || "";
  const [sortOption, setSortOption] = useState("Default");

  const applyFilters = () => {
    let result = items;

    const filterBy = (group, key) => {
      if (!filters[group] || filters[group].length === 0) return;
      result = result.filter(item => filters[group].includes(item[key]));
    };

    filterBy("frameType", "frameType");
    filterBy("frameShape", "shape");
    filterBy("frameColor", "color");
    filterBy("brand", "brand");
    filterBy("gender", "gender");
    filterBy("size", "size");

    if (searchQuery !== "") {
      result = result.filter(item =>
        item.title?.toLowerCase().includes(searchQuery) ||
        item.brand?.toLowerCase().includes(searchQuery) ||
        item.shape?.toLowerCase().includes(searchQuery) ||
        item.frameType?.toLowerCase().includes(searchQuery) ||
        item.color?.toLowerCase().includes(searchQuery) ||
        item.gender?.toLowerCase().includes(searchQuery)
      );
    }

    if (sortOption === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
    setVisibleItems(result.slice(0, itemsPerLoad));
  };

  useEffect(() => {
    applyFilters();
  }, [filters, sortOption, searchQuery, items]);

  const handleFilterChange = (group, value) => {
    setFilters(prev => {
      const selected = prev[group]?.includes(value)
        ? prev[group].filter(v => v !== value)
        : [...(prev[group] || []), value];

      return { ...prev, [group]: selected };
    });
  };

  const loadMore = () => {
    const next = filtered.slice(visibleItems.length, visibleItems.length + itemsPerLoad);
    if (next.length > 0) setVisibleItems(prev => [...prev, ...next]);
  };

  useEffect(() => {
    const scroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
      }
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [filtered, visibleItems]);

  const toggleSidebar = () => setIsSidebarOpen(v => !v);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-1 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            aria-label={isSidebarOpen ? "Close filters" : "Open filters"}
            aria-expanded={isSidebarOpen}
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md flex items-center justify-center"
          >
            <span className="sr-only">Toggle filters</span>
            <div className={`w-6 h-6 relative transition-transform duration-300`}>
              {isSidebarOpen ? (
                <Menu className="hidden" />
              ) : (
                <Menu />
              )}
            </div>
          </button>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-1 py-2 flex gap-6">
        <div className="hidden md:block flex-shrink-0">
          <Sidebar
            filters={filters}
            counts={counts}
            onFilterChange={handleFilterChange}
          />
        </div>

        <main className="flex-1">
          <section className="hidden md:flex items-center bg-[#ededed] px-1 py-2 justify-between gap-4">
            <div className="flex justify-center flex-col ">
              <h1 className="font-medium text-sm text-[#6a6c6e] m-0 text-left uppercase tracking-[2px]">Eyeglasses</h1>
            </div>
            <div className="flex justify-center text-sm tracking-[1.5px] ">
              <span className="cursor-pointer text-[#6a6c6e] text-sm font-bold">VIEW FRAMES</span>
              <div className="px-5">
                <div
                  onClick={() => setEnabled(!enabled)}
                  className={`w-20 h-7 flex items-center rounded-full p-1 cursor-pointer transition 
                ${enabled ? "bg-gray-300" : "bg-teal-500"}`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
                  ${enabled ? "translate-x-12" : "translate-x-0"}`}
                  ></div>
                </div>
              </div>
              <span className="cursor-pointer text-black font-semibold">VIEW 3D TRY ON</span>
            </div>
            <div className="text-sm flex items-center">
              <span className="text-[#217870] font-extrabold  my-0.5">
                <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66667 1.66675V12.3334M3.66667 12.3334L1 9.66675M3.66667 12.3334L6.33333 9.66675M10.3333 12.3334V1.66675M10.3333 1.66675L7.66667 4.33341M10.3333 1.66675L13 4.33341" stroke="currentColor" stroke-linecap="square"></path></svg>
              </span>
              <label className="text-[1em] pl-1 tracking-[1.5px] uppercase text-[#217870] leading-7 font-black mr-1.5">Sort By</label>
              <select
                className="p-[3px 38px 3px 8px] cursor-pointer border text-sm leading-5 bg-white"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>

            </div>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2 gap-6">
            {visibleItems.map(item => (
              <div key={item.id} className="relative ">
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(item); }}
                  className="absolute right-4 top-4 z-20 p-2"
                  title={isInWishlist(item.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {isInWishlist(item.id) ? (
                    <Heart className="text-red-500" fill="red" />
                  ) : (
                    <Heart className="hover:text-red-500" />
                  )}
                </button>

                <Link to={`/eyeglasses/${item.id}`}>
                  <div className="p-4 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="group relative w-full h-56 overflow-hidden rounded-2xl flex items-center justify-center">

                      {/* Front Image */}
                      <img
                        src={item.images?.front}
                        alt={item.title || item.brand}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />

                      {/* Side Image */}
                      {item.images?.side && (
                        <img
                          src={item.images?.side}
                          alt={item.title || item.brand}
                          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                      )}

                    </div>


                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center gap-2 bg-[#f5f5ff] rounded-full px-3 py-1">
                        <span className="font-semibold text-sm text-[#000042]">{item.rating}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="#00bac6"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg>
                        <span className="text-xs text-gray-500">{item.reviewCount}</span>
                      </div>
                    </div>

                    <p className="mt-3 font-bold text-sm text-gray-800 truncate">{item.brand}</p>
                    <p className="text-sm text-gray-600 mt-1">Size: {item.size}</p>

                    <div className="mt-2 flex items-baseline gap-2">
                      <div className="text-lg font-bold text-[#000042]">₹{item.price}</div>
                      <div className="line-through text-sm text-gray-400">₹{item.originalPrice}</div>
                      <div className="text-xs text-teal-500 font-bold">({item.discount})</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {visibleItems.length < filtered.length && (
            <p className="text-center mt-10 text-gray-500">Loading more items...</p>
          )}
        </main>
      </div>

      <WishlistPopup />

      {isSidebarOpen && (
        <>
          <div
            className="fixed top-16 inset-x-0 bottom-0 bg-black/40 z-[9998] md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-16 bottom-0 left-0 z-[9999] w-80 max-w-full md:hidden bg-white shadow-xl">
            <div className="h-full overflow-y-auto p-4">
              <Sidebar
                filters={filters}
                counts={counts}
                onFilterChange={handleFilterChange}
                mobileOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
              />
            </div>
          </div>
        </>
      )}

    </div>
  );
}
