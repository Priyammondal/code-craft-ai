"use client";
import React, { useState } from 'react'
import { HistoryItem } from '../types'
import { sampleCode } from '../data/examples';

interface CodeExplanationProps {
  addToHistory: (type: HistoryItem["type"], input: string, output: string) => void
}

const CodeExplanation = ({ addToHistory }: CodeExplanationProps) => {
  const [code, setCode] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleExplain = async () => {
    if (!code.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
      })
      const data = await response.json();
      if (response.ok) {
        const explanationText = data?.data?.explanation || "No explanation generated";
        setExplanation(explanationText);
        addToHistory("explain", code, explanationText);
      } else {
        setExplanation(`Error: ${data.error}`)
      }
    } catch (error) {
      setExplanation(`Failed to fetch explanation. Please try again.`);
    } finally {
      setLoading(false);
    }
  }

  const insertSample = () => {
    setCode(sampleCode)
  }

  return (
    <div className='space-y-8'>

      {/* Header */}
      <div className='flex items-center justify-between flex-wrap gap-4'>
        <div>
          <h2 className='text-3xl font-bold text-white'>
            Explain Code
          </h2>

          <p className='text-gray-400 mt-1 text-sm md:text-base'>
            Get AI-powered explanations for your code instantly.
          </p>
        </div>

        <button
          className='px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-gray-200 rounded-xl transition-all duration-300 text-sm font-medium backdrop-blur-md cursor-pointer'
          onClick={insertSample}
        >
          Try Sample
        </button>
      </div>

      {/* Input Section */}
      <div className='space-y-5'>

        <div>
          <label
            htmlFor="code"
            className='block text-sm font-medium text-gray-300 mb-3'
          >
            Paste your code
          </label>

          <div className='relative group'>

            <textarea
              id="code"
              rows={14}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder='Paste your code here to get a detailed explanation...'
              className='
              w-full px-5 py-4 pr-16
              bg-gray-900/70
              border border-white/10
              rounded-2xl
              resize-none
              font-mono text-sm text-gray-100
              backdrop-blur-xl
              outline-none
              transition-all duration-300
              focus:border-purple-500/60
              focus:ring-4 focus:ring-purple-500/10
            '
            />

            {/* Character Count */}
            <div className='absolute top-4 right-4 text-xs text-gray-500 bg-black/30 px-2 py-1 rounded-md'>
              {code.length}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleExplain}
          disabled={loading || !code.trim()}
          className='
          w-full px-6 py-4
          bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
          hover:scale-[1.01]
          active:scale-[0.99]
          text-white font-semibold
          rounded-2xl
          shadow-lg shadow-purple-900/30
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
              <span>Analyzing Code...</span>
            </>
          ) : (
            <>
              <span className='text-lg'>🔍</span>
              <span>Explain Code</span>
            </>
          )}
        </button>
      </div>

      {/* Output Section */}
      {explanation && (
        <div className='animate-in fade-in duration-500'>

          <div className='flex items-center gap-3 mb-5'>
            <div className='w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full'></div>

            <h3 className='text-2xl text-white font-semibold'>
              Explanation
            </h3>
          </div>

          <div className='
          bg-gray-900/60
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          overflow-hidden
          shadow-xl
        '>

            <div className='border-b border-white/10 px-5 py-3 bg-black/20'>
              <span className='text-sm text-gray-400'>
                AI Generated Output
              </span>
            </div>

            <div className='p-5'>
              <pre className='text-gray-100 whitespace-pre-wrap leading-7 text-sm overflow-x-auto'>
                {explanation}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeExplanation