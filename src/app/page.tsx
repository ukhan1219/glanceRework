import React from "react";
import Image from "next/image";
import glancePNG from "public/glance.png";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      {/* Main container */}
      <div className="bg-[#292464] min-h-screen flex flex-col justify-between">
        {/* Main content section */}
        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-11/12 lg:w-10/12">
            {/* Left Section - Text Section (responsive from full width to 2/3 on larger screens) */}
            <div className="w-full md:w-8/12 p-6 md:p-10 flex flex-col justify-center">
              <p
                className="fira-sans-regular text-neutral-content text-lg md:text-2xl lg:text-3xl font-bold"
              >
                Take Control of Your Finances with Glance
              </p>
              <p className="fira-sans-regular text-neutral-content mt-4 text-sm md:text-base lg:text-lg">
                Glance is your all-in-one financial hub, seamlessly connecting all your accounts in one place. Whether it's your checking or savings accounts, stocks, crypto holdings, or other investments, Glance provides a clear overview of your entire financial landscape. Monitor balances, track your assets, and manage your wealth with ease—all in a simple, intuitive interface. Stay informed, make smarter decisions, and unlock the power of your finances.
              </p>
            </div>

            {/* Right Section - Image Section (responsive from full width to 1/3 on larger screens) */}
            <div className="w-full md:w-4/12 flex justify-center items-center mt-8 md:mt-0">
              <div className="bg-foreground w-3/4 h-auto rounded-lg flex items-center justify-center p-6 md:p-10">
                <Image src={glancePNG} alt="Logo" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <footer className="bg-gray-900 py-4">
          <div className="text-center text-sm text-gray-500">
            © 2024 Glance. All rights reserved.
          </div>
        </footer>
      </div>
    </HydrateClient>
  );
}
