import TypingTitle from '@/app/components/TypingTitle';
import MatrixBackground from '@/app/components/MatrixBackground';
import TerminalLines from '@/app/components/TerminalLines';
import TerminalIntro from './components/TypingParagraph';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-green-400 font-mono overflow-x-hidden z-0">
      <MatrixBackground />
      <div className="w-full mx-auto px-4 py-10 flex flex-col items-center">
        <TypingTitle text="💾 DataLeak Repository" />
        <TerminalIntro />
        <div className="mt-10 w-full max-w-2xl">
          <TerminalLines />
        </div>
      </div>
    </main>
  );
}
