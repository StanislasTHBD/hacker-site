'use client';

import { useEffect, useState } from 'react';

export default function TerminalLines() {
  const [messages, setMessages] = useState<string[]>([]);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    fetch('/messages.json')
      .then((res) => res.json())
      .then(setMessages)
      .catch(() =>
        setMessages([
          '🔓 Initializing connection...',
          '🔍 Searching secure entry point...',
          '🌐 Routing through proxies...',
          '🔐 Decrypting data layers...',
          '✅ Access granted to vault.',
          '📁 Loading file index...',
          '💾 Terminal ready.'
        ])
      );
  }, []);

  useEffect(() => {
    if (messages.length === 0 || lineIndex >= messages.length) return;

    const currentLine = messages[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentText('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, messages, currentText]);

  return (
    <div className="bg-black border border-green-500 rounded p-4 text-sm h-40 overflow-y-auto font-mono text-green-400">
      {displayedLines.map((line, idx) => (
        <div key={idx}>&gt; {line}</div>
      ))}
      {currentText && <div>&gt; {currentText}</div>}
    </div>
  );
}
