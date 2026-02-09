import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import LayoutWrapper from "./LayoutWrapper";



const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bazar Point",
  description: "This is e-commerce platform where buy or sell Your any product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto_mono.className}
      >
        <LayoutWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
