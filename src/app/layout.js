import { Geist, Geist_Mono } from "next/font/google";

import HeaderApp from "./componant/header";
import FooterApp from "./componant/footer";
export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <HeaderApp/>
        {children}
        <FooterApp/>
      </body>
    </html>
  );
}
