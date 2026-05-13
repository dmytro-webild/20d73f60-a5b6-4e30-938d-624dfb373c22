import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Joanie\'s Bar | Your Local Dive in Old Town Murrieta',
  description: 'Experience the authentic dive bar atmosphere at Joanie\'s Bar in Old Town Murrieta. Friendly staff, cold drinks, pool tables, and great local vibes.',
  openGraph: {
    "title": "Joanie's Bar | Old Town Murrieta",
    "description": "The best local dive bar in Murrieta.",
    "siteName": "Joanie's Bar",
    "type": "website"
  },
};

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
