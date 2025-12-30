import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  const [items, setItems] = useState([]); 
  const [openPopup, setOpenPopup] = useState(false); 
  const [popupMode, setPopupMode] = useState("left"); 

  const guestKey = "lenskart-wishlist-guest";

  const userKey = (u) => (u && u.email ? `lenskart-wishlist-${u.email}` : null);

  useEffect(() => {
    const load = () => {
      const key = userKey(user);
      if (key) {
        const raw = localStorage.getItem(key);
        setItems(raw ? JSON.parse(raw) : []);
      } else {
        const raw = localStorage.getItem(guestKey);
        setItems(raw ? JSON.parse(raw) : []);
      }
    };
    load();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const gRaw = localStorage.getItem(guestKey);
    if (!gRaw) return;
    const guestList = JSON.parse(gRaw);
    if (!Array.isArray(guestList) || guestList.length === 0) return;

    const key = userKey(user);
    const uRaw = localStorage.getItem(key);
    const userList = uRaw ? JSON.parse(uRaw) : [];

    const map = {};
    [...userList, ...guestList].forEach((p) => (map[p.id] = p));
    const merged = Object.values(map);

    localStorage.setItem(key, JSON.stringify(merged));
    localStorage.removeItem(guestKey);
    setItems(merged);
  }, [user]); 

  useEffect(() => {
    const key = userKey(user);
    if (key) {
      localStorage.setItem(key, JSON.stringify(items));
    } else {
      localStorage.setItem(guestKey, JSON.stringify(items));
    }
  }, [items, user]);

  const toggle = (product) => {
    const exists = items.find((p) => p.id === product.id);
    if (exists) {
      const updated = items.filter((p) => p.id !== product.id);
      setItems(updated);
      setPopupMode(updated.length === 0 ? "right" : "left");
      setOpenPopup(true);
      return { action: "removed" };
    } else {
      const updated = [...items, product];
      setItems(updated);
      setPopupMode("left");
      setOpenPopup(true);
      return { action: "added" };
    }
  };

  const remove = (productId) => {
    const updated = items.filter((p) => p.id !== productId);
    setItems(updated);
  };

  const clear = () => {
    setItems([]);
  };

  const isInWishlist = (productId) => {
    return items.some((p) => p.id === productId);
  };

  const openWishlistPopup = () => {
    setPopupMode(items.length === 0 ? "right" : "left");
    setOpenPopup(true);
  };

  const closeWishlistPopup = () => {
    setOpenPopup(false);
  };

  const value = {
    items,
    toggle,
    remove,
    clear,
    isInWishlist,
    openPopup,
    openWishlistPopup,
    closeWishlistPopup,
    popupMode,
    setPopupMode,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}
