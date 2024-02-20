import type { Metadata } from "next";
import Head from "next/head";
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
      <Head>
        <meta property="og:image" content="/og_image.png" />
      </Head>
      <body className={`${Syne.className} bg-black relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
