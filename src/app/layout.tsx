import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | MyungKwan's Portfolio",
    default: "MyungKwan's Portfolio"
  },
  description: "Welcome MyungKwan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} inner bg-dark-200 text-[#eee]`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
