"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Fitmaker</title>
        <meta name="description" content="The platform for deciding your outfits everyday!" />
      </head>
      <body className={inter.className}>
        <NextUIProvider><Navbar />{children}</NextUIProvider></body>
    </html>
  );
}
