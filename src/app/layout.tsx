import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";

export const metadata: Metadata = {
  title: "Tymli",
  description: "A modern web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
