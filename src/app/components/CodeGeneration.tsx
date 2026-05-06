"use client";
import React, { useState } from 'react'
import { HistoryItem } from '../types'
import { languages, samplePrompts } from '../data/examples';

interface CodeGenerationProps {
  addToHistory: (type: HistoryItem["type"], input: string, output: string) => void
}

const CodeGeneration = ({ addToHistory }: CodeGenerationProps) => {
  const [description, setDescription] = useState<string>("");
  const [language, setLanguage] = useState<string>("Javascript");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ language, description })
      })
      const data = await response.json();
      if (response.ok) {
        const codeText = data?.data?.generatedCode || "No code generated";
        setGeneratedCode(codeText);
        addToHistory("generate", `${language}:${description}`, codeText);
      } else {
        setGeneratedCode(`Error: ${data.error}`)
      }
    } catch (error) {
      setGeneratedCode(`Failed to generate code. Please try again.`);
    } finally {
      setLoading(false);
    }
  }

  const insertSamplePrompt = (prompt: string) => {
    setDescription(prompt);
  }

  return (
    <div className='space-y-8'>

      {/* Header */}
      <div className='flex items-center justify-between flex-wrap gap-4'>
        <div>
          <h2 className='text-3xl font-bold text-white'>
            Generate Code
          </h2>

          <p className='text-gray-400 mt-1 text-sm md:text-base'>
            Transform ideas into production-ready code with AI assistance.
          </p>
        </div>
      </div>

      {/* Input Section */}
      <div className='space-y-6'>

        {/* Language Select */}
        <div>
          <label
            htmlFor="language"
            className='block text-sm font-medium text-gray-300 mb-3'
          >
            Programming Language
          </label>

          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='
            w-full px-5 py-4
            bg-gray-900/70
            border border-white/10
            rounded-2xl
            text-gray-100
            backdrop-blur-xl
            outline-none
            transition-all duration-300
            focus:border-pink-500/60
            focus:ring-4 focus:ring-pink-500/10
          '
          >
            {languages.map((lang) => (
              <option
                key={lang}
                value={lang}
                className='bg-gray-900'
              >
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <div className='flex items-center justify-between mb-3'>
            <label
              htmlFor="description"
              className='block text-sm font-medium text-gray-300'
            >
              Describe what you want to build
            </label>

            <span className='text-xs text-gray-500 bg-black/30 px-2 py-1 rounded-md'>
              {description.length} chars
            </span>
          </div>

          <textarea
            id="description"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Describe the code you want to generate. Be as specific as possible...'
            className='
            w-full px-5 py-4
            bg-gray-900/70
            border border-white/10
            rounded-2xl
            resize-none
            text-gray-100
            text-sm
            backdrop-blur-xl
            outline-none
            transition-all duration-300
            focus:border-pink-500/60
            focus:ring-4 focus:ring-pink-500/10
          '
          />
        </div>

        {/* Quick Prompts */}
        <div className='space-y-3'>
          <label
            htmlFor="quick-prompts"
            className='block text-sm font-medium text-gray-300'
          >
            Quick Prompts
          </label>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {samplePrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => insertSamplePrompt(prompt)}
                className='
                text-left px-4 py-3
                bg-white/5
                hover:bg-white/10
                border border-white/10
                hover:border-pink-500/30
                rounded-2xl
                text-sm text-gray-300
                transition-all duration-300
                backdrop-blur-md
                cursor-pointer
              '
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          disabled={loading || !description.trim()}
          className='
          w-full px-6 py-4
          bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
          hover:scale-[1.01]
          active:scale-[0.99]
          text-white font-semibold
          rounded-2xl
          shadow-lg shadow-pink-900/30
          transition-all duration-300
          disabled:opacity-50
          disabled:cursor-not-allowed
          flex items-center justify-center gap-3
          cursor-pointer
        '
        >
          {loading ? (
            <>
              <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
              <span>Generating Code...</span>
            </>
          ) : (
            <>
              <span className='text-lg'>⚡</span>
              <span>Generate Code</span>
            </>
          )}
        </button>
      </div>

      {/* Output Section */}
      {generatedCode && (
        <div className='animate-in fade-in duration-500'>

          <div className='flex items-center gap-3 mb-5'>
            <div className='w-1.5 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full'></div>

            <h3 className='text-2xl text-white font-semibold'>
              Generated Code
            </h3>
          </div>

          <div className='
          bg-gray-900/60
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          overflow-hidden
          shadow-2xl
        '>

            {/* Top Bar */}
            <div className='
            flex items-center justify-between
            px-5 py-3
            border-b border-white/10
            bg-black/20
          '>
              <span className='text-sm font-medium text-gray-400'>
                {language}
              </span>

              <button
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className='
                px-3 py-1.5
                text-xs
                bg-white/10
                hover:bg-white/20
                border border-white/10
                rounded-lg
                text-gray-200
                transition-all duration-300
                cursor-pointer
              '
              >
                Copy
              </button>
            </div>

            {/* Code Block */}
            <div className='p-5 overflow-x-auto'>
              <pre className='
              text-green-400
              whitespace-pre-wrap
              leading-7
              text-sm
              font-mono
            '>
                {generatedCode}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeGeneration