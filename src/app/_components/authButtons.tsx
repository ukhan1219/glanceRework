"use client";

import Image from "next/image";
import googleLogo from "public/google.png";
import discordLogo from "public/dicord.png";
import { signIn } from "next-auth/react";

// Google Sign-In Button
export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button
            onClick={handleClick}
            className="font-bold w-full flex items-center justify-center h-14 px-6 mt-4 text-l transition-colors duration-300 bg-neutral-300 border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-neutral-400"
        >
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <span className="ml-4">Sign in with Google</span>
        </button>
    );
}

// Discord Sign-In Button
export function DiscordSignInButton() {
    const handleClick = () => {
        signIn("discord");
    };

    return (
        <button
            onClick={handleClick}
            className="font-bold w-full flex items-center justify-center h-14 px-6 mt-4 text-l transition-colors duration-300 bg-neutral-300 border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-neutral-400"
        >
            <Image src={discordLogo} alt="Discord Logo" width={20} height={20} />
            <span className="ml-4">Sign in with Discord</span>
        </button>
    );
}

