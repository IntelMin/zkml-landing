import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Syne } from "@/fonts/syne";

export const metadata: Metadata = {
  title: "ZKML",
  description: "zKML-landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${Syne.className} bg-black relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
