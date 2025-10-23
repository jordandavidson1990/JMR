import Link from "next/link";
export default function NavBarSticky() {
  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-90 text-white py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-red-600"
        >
          JMR
        </Link>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
