import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-100`}>
        
        <nav className="bg-white shadow-sm border-b px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">

            <Link href="/" className="text-xl font-bold text-gray-900">
              TaskManager
            </Link>

            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>

              <Link href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Login
              </Link>

              <Link href="/register" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Register
              </Link>

              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Dashboard
              </Link>
            </div>

          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}