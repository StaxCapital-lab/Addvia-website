import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Addvia AS",
  description: "Vi skaper kvalifiserte salgsmuligheter gjennom møtebooking, rådgivning og markedsanalyse uten bindingstid.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts: Roboto, Libre Baskerville, Playfair Display, Plus Jakarta Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
