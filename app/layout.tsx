import "./globals.css";

import "public/assets/css/lightbox.css";
import "public/assets/css/styles.css";
import type { Metadata } from "next";
import { Mulish, Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

const mulish = Mulish({weight: '400', fallback:['Mulish','sans-serif'] , subsets: ["latin"] });
mulish.style.fontFamily = "Mulish, sans-serif";
export const metadata: Metadata = {
  title: "Liqueous-App ",
  description: "Back-Loan App ",

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/* <Head>
    <script>window.flutterfire_web_sdk_version = '9.22.1';</script>`
    </Head> */}
      <body className={mulish.className}>
        <div className="flex min-h-screen flex-col  bg-white bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9]    text-base font-normal text-gray antialiased dark:bg-[#101926] dark:from-transparent dark:to-transparent">
           <Header />
        {children}  
          <Footer />
        </div>
      </body>
    </html>
  );
}
