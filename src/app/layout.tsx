import type { Metadata } from "next";
import { pixelify } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "digihome",
  description: "Hi! digitale connected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${pixelify.className}`}>
        {children}
      </body>
    </html>
  );
}
