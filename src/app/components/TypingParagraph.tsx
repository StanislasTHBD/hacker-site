'use client';

import { useEffect, useState } from 'react';

const FULL_TEXT = `
Welcome to DataLeak — a secure, underground repository. 
Here you'll find classified documents, credentials, and darkweb tools. 
Browse leaks, filter sensitive dumps, and dive into the hidden vault.
This is your private entry point — no trace left behind.
`;

export default function TypingParagraph() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + FULL_TEXT[index]);
        setIndex(index + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p className="mt-6 w-full max-w-2xl text-green-400 text-base md:text-lg leading-relaxed font-mono break-words">
      {text}
      <span className="animate-pulse">█</span>
    </p>
  );
}
