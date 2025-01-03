import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./header";
import { AuthProvider } from "./context/AuthContext";
import { DataStateProvider } from "./context/DataStateContext"
// import { DataStateProvider } from "./context/dataStateContext";
// import { ThemeProvider } from "@material-tailwind/react";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "iq-challenge.",
  description: "quiz for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <DataStateProvider>
          <Header/>
          {children}
          </DataStateProvider>
        </AuthProvider>
  
      </body>

    </html>
  );
}
