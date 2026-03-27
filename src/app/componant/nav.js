"use client"
import Link from "next/link";
import "../globals.css";
import { usePathname } from "next/navigation";
import { use } from "react";
export default function Nav() {
    const pathname = usePathname();
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 space-x-4 flex flex-row justify-center">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-gray-500 mr-4"}>Home</Link>
          </li>
          <li>
            <Link href="/blog" className={pathname === "/blog" ? "font-bold mr-4" : "text-gray-500 mr-4"}>blog</Link>
          </li>
          <li>
            <Link href="/doc" className={pathname === "/doc" ? "font-bold mr-4" : "text-gray-500 mr-4"}>documentation</Link>
          </li>
          <li>
            <Link href="/products" className={pathname === "/products" ? "font-bold mr-4" : "text-gray-500 mr-4"}>Products</Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-gray-500 mr-4"}>about</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
