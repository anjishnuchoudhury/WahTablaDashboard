import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          WahTabla
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-black">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-black">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-black">Services</Link>
          </li>
          <li>
            <Link href="/dashboard/temp" className="text-white hover:text-black">Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default page
