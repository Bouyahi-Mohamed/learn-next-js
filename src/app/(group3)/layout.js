import { Geist, Geist_Mono } from "next/font/google";
export const metadata = {
  title: "My App",
  description: "This is my Next.js application.",
};
import HeaderApp from "../componant/header";
import FooterApp from "../componant/footer";
import Nav from "../componant/nav";
export default function RootLayoutForGroup1({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <HeaderApp name = "pink"/>
        <Nav />
        {children}
        <FooterApp name = "yellow"/>
      </body>
    </html>
  );
}
