import "./globals.css";
import "public/assets/css/lightbox.css";
import "public/assets/css/styles.css";
// import type { Metadata } from "next";
import { Mulish, Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";



const mulish = Mulish({
  weight:['400' ,'500', '600', '700','800' ],
  variable: '--font-mulish',
  display:'swap',
  subsets:["latin"]
})
export const metadata = {
  title: "Home | Liqueous",
  description: "Back-Loan App ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mulish.variable}`}>
      <head>
        <link rel="icon" href="/assets/images/favicon.png?<generated>"/>
      </head>
      <body >
        <div className="flex min-h-screen flex-col font-muslih font-normal bg-white bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9]    text-base  text-gray antialiased dark:bg-[#101926] dark:from-transparent dark:to-transparent">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
