'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `hover:text-green-300 transition ${
      pathname === href ? 'underline underline-offset-4' : ''
    }`;

  return (
    <nav className="w-full bg-black border-b border-green-500 px-4 py-3 flex items-center justify-between font-mono text-green-400">
      <div className="text-lg font-bold hover:text-green-300 transition">
        <Link href="/">💾 DataLeak</Link>
      </div>
      <div className="flex space-x-4 text-sm">
        <Link href="/" className={linkClasses('/')}>
          Home
        </Link>
        <Link href="/download" className={linkClasses('/download')}>
          Download
        </Link>
        <Link href="/signin" className={linkClasses('/signin')}>
          Sign In
        </Link>
      </div>
    </nav>
  );
}
