import { Geist, Geist_Mono } from "next/font/google";
export const metadata = {
  title: "My App",
  description: "This is my Next.js application.",
};

import HeaderApp from "../componant/header";
import FooterApp from "../componant/footer";
export default function RootLayoutForGroup2({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <HeaderApp name="lightblue"/>
        {children}
        <FooterApp name="orange"/>
      </body>
    </html>
  );
}
