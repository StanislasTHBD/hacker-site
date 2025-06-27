'use client';

import AuthForm from "../components/AuthForm";
import MatrixBackground from "../components/MatrixBackground";
import TypingTitle from "../components/TypingTitle";

export default function SignInPage() {
  return (
     <main className="relative min-h-screen bg-black text-green-400 font-mono overflow-x-hidden z-0">
      <MatrixBackground />
          <div className="w-full mx-auto px-4 py-10 flex flex-col items-center">
    
            <TypingTitle text="💾 DataLeak Repository" />
    
            <div className="mt-10 w-full max-w-2xl">
              <AuthForm />
            </div>
          </div>
    </main>
  );
}
