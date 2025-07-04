import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex h-96">

      <nav className="w-60 bg-blue-500 text-white p-6">
        <h1 className="text-2xl font-bold mb-8 text-amber-200">WahTabla</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-black font-bold">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black font-bold">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-black font-bold">Services</Link>
          </li>
          <li>
            <Link href="/dashboard/temp" className="hover:text-black font-bold">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">User Table</h2>
        <table className="w-full bg-white shadow-md rounded-lg ">
          <thead className="bg-yellow-200 text-left">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">saif</td>
              <td className="px-4 py-2">saif@example.com</td>
              <td className="px-4 py-2">Admin</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">ram</td>
              <td className="px-4 py-2">ram@example.com</td>
              <td className="px-4 py-2">Editor</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">rahul</td>
              <td className="px-4 py-2">rahul@example.com</td>
              <td className="px-4 py-2">Viewer</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Page;
