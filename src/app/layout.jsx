import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeListKu",
  description: "Website  Anime List Ku",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-zinc-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
