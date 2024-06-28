import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPlanTask",
  description: "A task planning and management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classes = [
    "bg-gradient-to-b",
    "from-[#f1f5f9]",
    "via-[#f1f5f9]",
    "to-[#f1f5f9]",
    inter.className
  ];
  return (
    <html lang="en">
      <body className={classes.join(' ')}>
        <Navbar title={metadata.title?.toString() || ""} />
        {children}
      </body>
    </html>
  );
}
