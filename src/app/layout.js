import { Geist, Geist_Mono, Manrope, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import { Toaster } from "react-hot-toast";
import MusicControl from "./(components)/MusicControl";
import Head from "next/head";


const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], variable: '--font-roboto-condensed' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PushMuse | AI-powered Git Tool",
  description: "Generate smarter Git commits with AI-powered assistance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      
      
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${robotoCondensed.variable} antialiased`}
      >
        <Navbar></Navbar>
        <Toaster></Toaster>
        <MusicControl></MusicControl>
       
        {children}
     
      </body>
    </html>
  );
}
