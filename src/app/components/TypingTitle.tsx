'use client';
import { useEffect, useState } from 'react';

interface Props {
  text: string;
}

export default function TypingTitle({ text }: Props) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <h1 className="text-3xl sm:text-5xl mb-6 text-center animate-pulse">{displayed}</h1>;
}