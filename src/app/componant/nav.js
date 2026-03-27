import Link from "next/link";
import "../globals.css";
export default function Nav() {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 space-x-4 flex flex-row justify-center">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/doc">documentation</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
