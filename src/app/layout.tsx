import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
  title: "Glance",
  description: "Your Personal Finance, at a Glance",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        {/* Use the Next.js Head component to ensure this runs both server and client side */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
