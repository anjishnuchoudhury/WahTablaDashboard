import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  return (
    <div className="flex h-96">
      <nav className="w-60 bg-blue-500 text-white p-6">
        <h1 className="text-2xl font-bold mb-8 text-amber-200">WahTabla</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-black font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black font-bold">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-black font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link href="/dashboard/temp" className="hover:text-black font-bold">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      <div className="w-full overflow-x-hidden px-4">
        <Table className="w-full border border-gray-300 rounded-lg">
          <TableHeader>
            <TableRow className="bg-amber-200">
              <TableHead className="px-4 py-2">Invoice</TableHead>
              <TableHead className="px-4 py-2">Status</TableHead>
              <TableHead className="px-4 py-2">Method</TableHead>
              <TableHead className="px-4 py-2">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="px-4 py-2 font-medium">INV111</TableCell>
              <TableCell className="px-4 py-2">cell-01</TableCell>
              <TableCell className="px-4 py-2">Debit Card</TableCell>
              <TableCell className="px-4 py-2">$150.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4 py-2 font-medium">INV222</TableCell>
              <TableCell className="px-4 py-2">cell-02</TableCell>
              <TableCell className="px-4 py-2">Credit Card</TableCell>
              <TableCell className="px-4 py-2">$250.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="px-4 py-2 font-medium">IN333</TableCell>
              <TableCell className="px-4 py-2">cell-03</TableCell>
              <TableCell className="px-4 py-2">Cash</TableCell>
              <TableCell className="px-4 py-2">$350.00</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
