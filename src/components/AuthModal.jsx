import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

/**
 * Global modal component that uses AuthContext for actions.
 * - Shows login or signup based on authMode from context.
 */

export default function AuthModal() {
    const {
        showAuthModal,
        setShowAuthModal,
        authMode,
        setAuthMode,
        signup,
        login,
    } = useAuth();

    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const wrapperRef = useRef(null);

    // Reset when modal opens/closes
    useEffect(() => {
        if (showAuthModal) {
            setForm({ name: "", email: "", password: "" });
            setError("");
        }
    }, [showAuthModal, authMode]);

    // close on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowAuthModal(false);
            }
        }
        if (showAuthModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showAuthModal, setShowAuthModal]);

    if (!showAuthModal) return null;

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (authMode === "signup") {
            const { name, email, password } = form;
            const res = signup({ name: name.trim(), email: email.trim(), password });
            if (!res.ok) setError(res.message);
        } else {
            const { email, password } = form;
            const res = login({ email: email.trim(), password });
            if (!res.ok) setError(res.message);
        }
    };

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-4">
            <div
                ref={wrapperRef}
                className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 relative"
            >
                {/* close */}
                <button
                    onClick={() => setShowAuthModal(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
                    aria-label="Close"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-[#0f172a]">
                    {authMode === "signup" ? "Create an Account" : "Sign In"}
                </h2>

                <form onSubmit={onSubmit} className="space-y-3">
                    {authMode === "signup" && (
                        <input
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                            placeholder="Full name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />
                    )}

                    <input
                        className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <input
                        className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold"
                    >
                        {authMode === "signup" ? "Create Account" : "Sign In"}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                    {authMode === "signup" ? (
                        <>
                            Already have an account?{" "}
                            <button
                                className="text-teal-600 font-medium"
                                onClick={() => setAuthMode("login")}
                            >
                                Sign In
                            </button>
                        </>
                    ) : (
                        <>
                            New here?{" "}
                            <button
                                className="text-teal-600 font-medium"
                                onClick={() => setAuthMode("signup")}
                            >
                                Create an Account
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
