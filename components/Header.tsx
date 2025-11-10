
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
        <div className="inline-block bg-sky-500/10 text-sky-400 text-sm font-medium py-1 px-3 rounded-full mb-4">
            Powered by Gemini
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            Reverse Prompt Generator
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Turn any output into a high-quality prompt. Paste a piece of text, and our AI will engineer the perfect prompt that could have created it.
        </p>
    </header>
  );
};

export default Header;
