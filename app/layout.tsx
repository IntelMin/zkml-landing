import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Syne } from "@/fonts/syne";

export const metadata: Metadata = {
  metadataBase: new URL("https://zkml-landing.vercel.app/"),
  title: "ZKML",
  description:
    "Unlocking Privacy, Secure Blockchain Communication, and Cross Interoperability. Harnessing machine learning to create zK-Proofs and secure multiparty computation for data privacy",
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
