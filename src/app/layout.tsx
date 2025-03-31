import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Viva Garden",
  description: "E-commerce demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-jardin-beige text-zinc-900'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
