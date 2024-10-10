import React from 'react'
import { getServerAuthSession } from '~/server/auth';
import { HydrateClient } from "~/trpc/server";
import { GoogleSignInButton, DiscordSignInButton } from "~/app/_components/authButtons";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerAuthSession();

  if (session) {
    return  redirect('/dashboard');

  }

  return (
    <HydrateClient>
      <div className="bg-site-background min-h-screen text-white w-full flex flex-col items-center justify-start pt-20">
        <div className="bg-site-foreground flex flex-col items-center w-1/3 p-10 shadow-md rounded-lg">
          <h1 className="manrope-custom mt-5 mb-4 font-bold" style={{ fontSize: "4rem", fontWeight: "bold", marginTop: "0%" }}>Sign In</h1>
          <GoogleSignInButton/>
          <DiscordSignInButton/>
        </div>
      </div>
    </HydrateClient>

  );
}