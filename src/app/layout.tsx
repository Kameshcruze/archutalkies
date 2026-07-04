import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import SmoothScroll from "@/components/global/SmoothScroll";
import LoadingScreen from "@/components/global/LoadingScreen";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Archana | Digital Creator & Influencer",
  description: "Portfolio of Archana, a Tamil Digital Creator & Influencer known for lifestyle, relatable moments, and entertainment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased selection:bg-primary/30 selection:text-white`}>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
