import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the font weights you need
})

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
       className={poppins.className} 
      >
       <section className=" xl:max-w-[1300px] mx-auto">
       <Navbar />
        {children}
        <Footer/>
       </section>
      </body>
    </html>
  );
}
