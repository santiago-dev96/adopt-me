import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./Header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Adopt Me!",
  description: "Web app for pet adoption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="pt-[74px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
