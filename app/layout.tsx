import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/content/footer"
import Header from "@/content/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comité Social GILC",
  description: "Nous sommes un pilier de notre mission d'amour, de solidarité et d'intégration communautaire. Basé à Ottawa, il vise à répondre aux besoins concrets des jeunes et des familles, particulièrement francophones, dans un esprit de compassion chrétienne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header/>
        {children}
      <Footer/>        
      </body>
    </html>
  );
}
