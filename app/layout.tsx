import type { Metadata } from "next";
import { monserrat, mystery_quest } from "@/fonts/fonts";
import "./globals.css";
import "material-symbols"

import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Wiki Cat",
  description: "Get to know more about your cat breed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} ${mystery_quest.variable} px-4`}>
        <Footer/>
      </body>
    </html>
  );
}
