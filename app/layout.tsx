import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/app/_providers/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lifehax",
  description: "The best life hacks",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans min-h-screen h-full text-foreground dark:text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
