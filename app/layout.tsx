import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Alhie Fikri - Web Developer Portfolio",
  description:
    "Hi, I'm Alhie Fikri, a passionate web developer specializing in modern web technologies like React, Next.js, Tailwind CSS, and more. Explore my projects and skills!",
  keywords: [
    "web developer",
    "portfolio",
    "Alhie Fikri",
    "React",
    "Next.js",
    "Tailwind CSS",
    "frontend developer",
    "JavaScript",
    "web development",
  ],
  authors: [{ name: "Alhie Fikri", url: "https://alhiefikri.vercel.app" }],
  openGraph: {
    title: "Alhie Fikri - Web Developer Portfolio",
    description:
      "Hi, I'm Alhie Fikri, a passionate web developer specializing in modern web technologies like React, Next.js, Tailwind CSS, and more. Explore my projects and skills!",
    url: "https://alhiefikri.vercel.app",
    siteName: "Alhie Fikri Portfolio",
    images: [
      {
        url: "https://alhiefikri.vercel.app/public/og-image.png", // Ganti dengan URL gambar OpenGraph Anda
        width: 1200,
        height: 630,
        alt: "Alhie Fikri Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhie Fikri - Web Developer Portfolio",
    description:
      "Hi, I'm Alhie Fikri, a passionate web developer specializing in modern web technologies like React, Next.js, Tailwind CSS, and more. Explore my projects and skills!",
    images: ["https://alhiefikri.vercel.app/public/og-image.png"], // Ganti dengan URL gambar Twitter Anda
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
