import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Syne } from "@/fonts/syne";

export const metadata: Metadata = {
  metadataBase: new URL("https://zkml-landing.vercel.app/"),
  title: "ZKML",
  description: "zKML-landing",
  openGraph: {
    images: "/opengraph-image.png",
  },
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
