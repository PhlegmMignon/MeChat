"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const details = { email: email, password: password };

    try {
      fetch("http://localhost:3000/api/login", {
        method: "POST",
        // mode: "cors",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
    } catch (err) {}
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-400">
      <div className="">
        <form action="" method="post" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <label htmlFor="password">Password</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="text"
          />
          <button>Log in</button>
        </form>
        <button>Demo account</button>
        <button>Sign up</button>
      </div>
      {/* <Image></Image> */}
    </main>
  );
}
