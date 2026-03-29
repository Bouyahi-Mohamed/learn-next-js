import Link from "next/link";

export default function products({params}) {
  return (
    <main className="container mx-auto px-4 py-8 secodary">
      <h1>Products</h1>
      <Link href="/products/1">
        <p>This is the products number 1</p>
      </Link>
      <Link href="/products/2">
        <p>This is the products number 2</p>
      </Link>
      <Link href="/products/3">
        <p>This is the products number 3</p>
      </Link>
      <Link href="/products/4">
        <p>This is the products number 4</p>
      </Link>
    </main>
  );
}
