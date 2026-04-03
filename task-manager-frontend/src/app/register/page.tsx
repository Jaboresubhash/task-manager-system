"use client";

import Link from 'next/link';

import { useState } from "react";
import { api } from "@/src/services/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    await api.register({ email, password });
    alert("Registered successfully");
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
<div className="mb-6 w-full max-w-md text-center">
  <Link href="/" className="text-gray-500 hover:text-gray-700 mr-4 text-sm">← Home</Link>
  <Link href="/login" className="text-gray-500 hover:text-gray-700 text-sm">Login</Link>
</div>
<h1 className="text-2xl font-bold">Register</h1>

      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2"
      >
        Register
      </button>
    </div>
  );
}