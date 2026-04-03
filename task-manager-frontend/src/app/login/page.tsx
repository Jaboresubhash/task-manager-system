"use client";

import Link from 'next/link';


import { useState } from "react";
import { api } from "@/src/services/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await api.login({ email, password });

    if (res.accessToken) {
      localStorage.setItem("token", res.accessToken);
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
<div className="mb-6 w-full max-w-md text-center">
  <Link href="/" className="text-gray-500 hover:text-gray-700 mr-4 text-sm">← Home</Link>
  <Link href="/register" className="text-gray-500 hover:text-gray-700 text-sm">Register</Link>
</div>
<h1 className="text-2xl font-bold">Login</h1>

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
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  );
}