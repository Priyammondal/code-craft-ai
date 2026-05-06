"use client";
import React, { useState } from 'react'
import Header from './components/Header'
import FeatureGrid from './components/FeatureGrid'
import HistoryPanel from './components/HistoryPanel'
import tabs from './data/tabs'
import { HistoryItem, Tab } from './types';
import CodeExplanation from './components/CodeExplanation';
import CodeDebugging from './components/CodeDebugging';
import CodeGeneration from './components/CodeGeneration';
import Footer from './components/Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab["id"]>("explain");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addToHistory = (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => {
    const newItem: HistoryItem = {
      id: Date.now(),
      type,
      timestamp: new Date().toLocaleString(),
      input,
      output,
    };

    setHistory((prev) => [newItem, ...prev.slice(0, 9)]);
  };

  return (
    <div className='relative min-h-screen bg-[#030712] overflow-hidden'>

      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -inset-10 opacity-20'>

          <div className='
            absolute top-[10%] left-[5%]
            w-52 h-52 md:w-72 md:h-72
            bg-purple-500 rounded-full blur-3xl
            animate-pulse
          '></div>

          <div className='
            absolute top-[25%] right-[5%]
            w-52 h-52 md:w-72 md:h-72
            bg-yellow-500 rounded-full blur-3xl
            animate-pulse delay-300
          '></div>

          <div className='
            absolute bottom-[10%] left-[30%]
            w-52 h-52 md:w-72 md:h-72
            bg-pink-500 rounded-full blur-3xl
            animate-pulse delay-700
          '></div>

        </div>
      </div>

      {/* Main Content */}
      <main className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10'>

        {/* Header */}
        <Header />

        {/* Main Layout */}
        <div className='
          flex flex-col xl:flex-row
          gap-6 lg:gap-8
          max-w-7xl mx-auto
        '>

          {/* Left Section */}
          <div className='w-full xl:w-2/3'>

            <div className='
              bg-gray-900/60
              backdrop-blur-2xl
              border border-white/10
              rounded-3xl
              shadow-2xl
              overflow-hidden
            '>

              {/* Tabs */}
              <div
                className='
    flex flex-wrap items-center
    gap-3
    p-3 md:p-4
    border-b border-white/10
    bg-black/20
  '
              >
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
        flex items-center justify-center gap-2
        px-4 md:px-5
        py-3
        rounded-2xl
        font-medium
        text-sm md:text-base
        transition-all duration-300
        min-w-[150px]
        flex-1 sm:flex-none
        ${activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                        : `text-gray-400 hover:text-white hover:bg-white/10`
                      }
      `}
                  >
                    <span className='text-lg'>
                      {tab.icon}
                    </span>

                    <span className='whitespace-nowrap'>
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className='p-4 md:p-6'>
                {activeTab === "explain" && (
                  <CodeExplanation addToHistory={addToHistory} />
                )}

                {activeTab === "debug" && (
                  <CodeDebugging addToHistory={addToHistory} />
                )}

                {activeTab === "generate" && (
                  <CodeGeneration addToHistory={addToHistory} />
                )}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full xl:w-1/3'>
            <div className='xl:sticky xl:top-6'>
              <HistoryPanel history={history} />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className='mt-12 md:mt-16'>
          <FeatureGrid />
        </div>
      </main>
    </div>
  )
}

export default Home