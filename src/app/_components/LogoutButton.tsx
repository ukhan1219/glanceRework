"use client";

import { signOut } from "next-auth/react"


export const LogoutButton  = () => {
    const handleSignout = () => {
        signOut({
            callbackUrl: "/",
        });
    };

    return (
        <button onClick={handleSignout} className="text-red-500 hover:text-red-700 transition-colors duration-300">Logout</button>
    )
}