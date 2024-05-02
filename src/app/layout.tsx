import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { mulish } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Viet Porfolio",
  description: "Here is Viet Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />

        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
