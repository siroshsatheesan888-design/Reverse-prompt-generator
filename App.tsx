
import React, { useState, useCallback } from 'react';
import { generateReversePrompt } from './services/geminiService';
import Header from './components/Header';
import TextAreaInput from './components/TextAreaInput';
import PromptOutput from './components/PromptOutput';
import Loader from './components/Loader';
import { EXAMPLE_TEXTS } from './constants';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePrompt = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to analyze.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');

    try {
      const prompt = await generateReversePrompt(inputText);
      setGeneratedPrompt(prompt);
    } catch (err) {
      setError('Failed to generate prompt. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [inputText]);

  const handleExampleClick = (text: string) => {
    setInputText(text);
    setGeneratedPrompt('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Header />
        <main className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <TextAreaInput
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste the text output here..."
              />
               <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                    onClick={handleGeneratePrompt}
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 disabled:bg-sky-800 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-sky-500/50"
                  >
                    {isLoading ? <Loader /> : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        Generate Prompt
                      </>
                    )}
                </button>
                 <button
                    onClick={() => { setInputText(''); setGeneratedPrompt(''); setError(null);}}
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Clear
                  </button>
               </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2">Or try an example:</h3>
                <div className="flex flex-wrap gap-2">
                  {EXAMPLE_TEXTS.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(example.content)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium py-1 px-3 rounded-full transition-colors duration-200"
                    >
                      {example.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {error && <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg">{error}</div>}
              {generatedPrompt && !isLoading && <PromptOutput prompt={generatedPrompt} />}
              {isLoading && (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-8 border border-slate-700">
                    <Loader />
                    <p className="mt-4 text-slate-400 text-center">Analyzing text and crafting the perfect prompt...</p>
                  </div>
              )}
               {!generatedPrompt && !isLoading && !error && (
                 <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800/50 rounded-lg p-8 border-2 border-dashed border-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="mt-4 text-slate-400 text-center">Your generated prompt will appear here.</p>
                 </div>
               )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
