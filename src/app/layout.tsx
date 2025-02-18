import type { Metadata } from "next";
import "./globals.css";
import logo from "@/assets/logo.png";
import { Roboto } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectDescription, projectName } from "@/configs/Configs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: projectName,
  description: projectDescription,
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} antialiased max-w-screen-2xl mx-auto bg-[#181f2b]`}
      >
        
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
