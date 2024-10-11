import React from 'react'
import { getServerAuthSession } from '~/server/auth';
import { HydrateClient } from "~/trpc/server";
import { GoogleSignInButton, DiscordSignInButton } from "~/app/_components/authButtons";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerAuthSession();

  if (session) {
    return redirect('/dashboard');

  }

  return (
    <HydrateClient>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="card bg-foreground text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-5xl manrope-bold">Sign In</h2>
            <div className="card-actions justify-end">
              <GoogleSignInButton />
              <DiscordSignInButton />
            </div>
          </div>
        </div>
      </div>
    </HydrateClient>

  );
}