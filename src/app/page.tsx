import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

//  TODO: index/splash page

export default async function Home() {

  return (
    <HydrateClient>
      <main><h1 className="manrope-bold text-9xl">Glance</h1></main>
    </HydrateClient>
  );
}
