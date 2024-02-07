import { Baloo_Paaji_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Baloo = Baloo_Paaji_2({ subsets: ["latin"], variable: "--font-baloo" });

export const metadata = {
  title: "Amit Sharma - Your Go-To Destination for Developer Learning",
  description: "Unlock the world of development with Amit Sharma. Dive into coding tutorials, insightful articles, and practical resources to enhance your skills. Whether you're a beginner or seasoned developer, find valuable insights and guidance to elevate your journey in software development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Baloo.className}>
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
