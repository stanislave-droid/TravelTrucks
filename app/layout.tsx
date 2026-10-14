import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header/Header";
import { Toaster } from "react-hot-toast";
import TanStackQueryProvider from "@/components/providers/TanStackQueryProvider/TanStackQueryProvider";

const montserrat = Inter({
  style: "normal",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTruck",
  description: "Service for searching trucks",
  openGraph: {
    title: "TravelTruck",
    description: "Service for searching trucks",
    images: [
      {
        url: "/opengraph-image.jpg",
        height: 1200,
        width: 630,
        alt: "TravelTruck",
      },
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <TanStackQueryProvider>
          <Toaster />
          <Header />
          <div className="page-content">{children}</div>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
