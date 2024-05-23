import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LifeDrops",
  description: "Blood Donation Management Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <>
            <Toaster position="top-center" />
            {children}
          </>
        </body>
      </html>
    </Providers>
  );
}
