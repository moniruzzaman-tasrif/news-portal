
import {  Noto_Sans_Bengali  } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";




const banglaFont = Noto_Sans_Bengali({

  subsets: ["latin","bengali"],
});



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${banglaFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>

        <main> {children}</main>
      </body>
    </html>
  );
}
