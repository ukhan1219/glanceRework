"use client";

import { signOut } from "next-auth/react"

//  logout button handler
export const LogoutButton  = () => {
    const handleSignout = () => {
        signOut({
            callbackUrl: "/",
        });
    };

    return (
        <button onClick={handleSignout} className="text-red-500 hover:text-red-800 transition-colors duration-300">Logout</button>
    )
}