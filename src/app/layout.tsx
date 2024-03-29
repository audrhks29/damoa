import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter as FontSans } from "next/font/google"
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

import Providers from "@/provider/Providers";

import "./globals.css";
import Loading from "./search/loading";

const Header = dynamic(() => import('./Header'))

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "DaMoa",
  description: "다양한 정보와 컨텐츠를 검색해보세요.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
