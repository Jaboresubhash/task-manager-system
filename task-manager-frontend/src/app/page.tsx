"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-6 text-center">
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Welcome to TaskManager
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Manage your tasks efficiently with our intuitive dashboard.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/register"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Get Started - Register
        </Link>
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Sign In
        </Link>
      </div>
      
      <div>
        <Link
          href="/dashboard"
          className="text-gray-500 hover:text-gray-700 text-sm underline"
        >
          Or go to Dashboard -

        </Link>
      </div>
    </div>
  );
}

