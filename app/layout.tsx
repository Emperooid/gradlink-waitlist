import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GradLink AI - Join the Waitlist",
  description:
    "Join the waitlist for GradLink AI - The future of student networking where AI meets opportunity. Connect with mentors, access career tools, and unlock your potential.",
  icons: {
    icon: [
      { url: "/gradlink-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/gradlink-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/gradlink-logo.png",
    shortcut: "/gradlink-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
