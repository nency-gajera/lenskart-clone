import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const u = localStorage.getItem("lenskart-user");
            return u ? JSON.parse(u) : null;
        } catch {
            return null;
        }
    });

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState("login"); // 'login' | 'signup'

    // Persist user
    useEffect(() => {
        if (user) {
            localStorage.setItem("lenskart-user", JSON.stringify(user));
            localStorage.setItem("lenskart-loggedin", "true");
        } else {
            localStorage.removeItem("lenskart-loggedin");
            localStorage.removeItem("lenskart-user");
        }
    }, [user]);

    // Signup: save user credentials in localStorage "lenskart-accounts" (array)
    const signup = ({ name, email, password }) => {
        if (!name || !email || !password) {
            return { ok: false, message: "Please fill in all fields." };
        }

        // read accounts
        const raw = localStorage.getItem("lenskart-accounts");
        const accounts = raw ? JSON.parse(raw) : [];

        const exists = accounts.find((a) => a.email === email);
        if (exists) {
            return { ok: false, message: "Account with this email already exists." };
        }

        const newAccount = { name, email, password };
        accounts.push(newAccount);
        localStorage.setItem("lenskart-accounts", JSON.stringify(accounts));

        // set logged in user
        setUser({ name, email });
        setShowAuthModal(false);
        return { ok: true };
    };

    // Login: check accounts
    const login = ({ email, password }) => {
        if (!email || !password) {
            return { ok: false, message: "Please enter email and password." };
        }

        const raw = localStorage.getItem("lenskart-accounts");
        const accounts = raw ? JSON.parse(raw) : [];

        const account = accounts.find((a) => a.email === email && a.password === password);
        if (!account) {
            return { ok: false, message: "Invalid credentials." };
        }

        setUser({ name: account.name, email: account.email });
        setShowAuthModal(false);
        return { ok: true };
    };

    const logout = () => {
        setUser(null);
        setShowAuthModal(false);
    };

    const value = {
        user,
        signup,
        login,
        logout,
        showAuthModal,
        setShowAuthModal,
        authMode,
        setAuthMode,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
