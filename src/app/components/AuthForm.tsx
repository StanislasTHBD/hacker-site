'use client';

import { useState } from 'react';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setStatus('❌ Email & Password required.');
      return;
    }

    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setStatus('✅ Credentials saved.');
        setEmail('');
        setPassword('');
      } else {
        setStatus('❌ Failed to save.');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Error occurred.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border border-green-500 p-6 rounded text-green-400 max-w-md mx-auto my-8 font-mono"
    >
      <h2 className="text-xl mb-4">🔐 SIGN IN</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-2 px-3 py-2 bg-black border border-green-500 text-green-400"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 px-3 py-2 bg-black border border-green-500 text-green-400"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400"
      >
        Sign in
      </button>

      {status && <div className="mt-4">{status}</div>}
    </form>
  );
}
