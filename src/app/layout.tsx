import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-jardin-beige'}>
        <Navbar />
        <main className="max-w-[90%] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
