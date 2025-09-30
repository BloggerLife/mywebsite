import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MacZain | Digital designer",
  description:
    "Your Digital Designer. Graphic, Websites, Apps and Social Media Management",
  openGraph: {
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/wesayblog-78349.appspot.com/o/maczain.svg?alt=media&token=0acf7cb3-6901-4287-a04a-31a23cd61719",
        width: 1200,
        height: 630,
        alt: "MacZain Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
