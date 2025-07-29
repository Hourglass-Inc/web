import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import NavContainer from "@/components/nav/nav-container";
import Footer from "@/components/footer/footer";
import { NavigationProvider } from "@/contexts/navigation-context";

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
        <NavigationProvider>
          <NavContainer />
          <LenisProvider>
            {children}
            <Footer />
          </LenisProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
