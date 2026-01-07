import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Agooy — Software Engineer",
  description:
    "Software Engineer, currently at Traveloka. Focused on interfaces and experiences, working on-site in Jakarta.",
  generator: "Next.js",
  applicationName: "Agooy",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "indonesia",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Agooy — Software Engineer",
    description:
      "Software Engineer, currently at Traveloka. Focused on interfaces and experiences, working on-site in Jakarta.",
    url: undefined,
    siteName: undefined,
    images: [
      {
        url: "https://i.ibb.co.com/CtwZJcz/12e65f0bbfbfaf4124d32fbfa606081c52c5212a432d46c31e055a4021939fe5.png",
        width: 1200,
        height: 630,
        alt: "Agooy — Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agooy — Software Engineer",
    description:
      "Software Engineer, currently at Traveloka. Focused on interfaces and experiences, working on-site in Jakarta.",
    creator: "Agooy",
    creatorId: "1243720976552144897",
    images: [
      "https://i.ibb.co.com/CtwZJcz/12e65f0bbfbfaf4124d32fbfa606081c52c5212a432d46c31e055a4021939fe5.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
