import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";

import Providers from './../components/provider/Providers';

import "./globals.css";
import Loading from "./search/loading";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaMoa",
  description: "Generated by create next app",
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
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          <Providers> {children}</Providers>
        </body>
      </Suspense>
    </html>
  );
}
