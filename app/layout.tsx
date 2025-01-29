import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kesara's Website",
  description: "Kesara Rathnasiri's Portfolio Website",
  icons: {
    icon: "/100.png", // Path to your favicon
    // You can also add other sizes or types of icons if needed
    // apple: '/path-to-your-logo/apple-touch-icon.png',
    // shortcut: '/path-to-your-logo/shortcut-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}