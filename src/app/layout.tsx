"use client"

import SideNav from "@/component/common/side-nav/SideNav";
import "@/styles/layout.css"
import { Noto_Sans_KR } from "next/font/google";
import reduxProvider from "@/redux/provider";
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>
        <div className="layout-root">
            <div className="side-nav-wrap">
              <SideNav/>
            </div>
            <div className="content-wrap">
              <reduxProvider>
                {children}
              </reduxProvider>
            </div>
        </div>
      </body>
    </html>
  );
}