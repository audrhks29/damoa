import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import Loading from "./search/loading";
import Providers from "@/provider/Providers";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
