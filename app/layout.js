import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "RentAHome",
  description: "Application which lets you search different real estate options close to you. Created by Alex Borges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
