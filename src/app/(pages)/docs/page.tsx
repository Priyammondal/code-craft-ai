"use client";
import Link from 'next/link'

export default function DocsPage() {
    const sections = [
        {
            title: 'What is CodeCraft AI?',
            description:
                'CodeCraft AI is your intelligent coding companion designed to help developers understand, debug, and generate code effortlessly.',
            items: [
                'AI-powered code assistance',
                'Modern developer experience',
                'Instant intelligent responses',
            ],
        },
        {
            title: 'Explain Code',
            description:
                'Paste any code snippet and instantly receive a detailed explanation of logic, flow, and functionality.',
            items: [
                'Understand complex logic',
                'Learn unfamiliar codebases',
                'Improve developer productivity',
            ],
        },
        {
            title: 'Debug Faster',
            description:
                'Identify issues, bugs, and optimization opportunities with AI-driven debugging assistance.',
            items: [
                'Detect errors instantly',
                'Get debugging suggestions',
                'Improve code quality',
            ],
        },
        {
            title: 'Generate Production Ready Code',
            description:
                'Describe what you want to build and generate scalable code in multiple programming languages.',
            items: [
                'Frontend & backend snippets',
                'Reusable components',
                'Rapid prototyping',
            ],
        },
    ]

    return (
        <div className='relative min-h-screen bg-[#030712] overflow-hidden'>

            {/* Background */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>

                <div className='absolute top-[10%] left-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse'></div>

                <div className='absolute top-[25%] right-[10%] w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-300'></div>

                <div className='absolute bottom-[10%] left-[35%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700'></div>
            </div>

            {/* Hero */}
            <section className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16'>

                <div className='max-w-4xl mx-auto text-center'>

                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6'>
                        <span className='text-sm text-cyan-300'>
                            📘 Product Guide
                        </span>
                    </div>

                    <h1 className='text-4xl sm:text-5xl md:text-7xl font-black leading-tight'>
                        <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent'>
                            Explore CodeCraft AI
                        </span>
                    </h1>

                    <p className='mt-6 text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto'>
                        Discover everything CodeCraft AI can do to improve your coding workflow and developer experience.
                    </p>
                </div>
            </section>

            {/* Docs Layout */}
            <section className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>

                    {/* Sidebar */}
                    <aside className='lg:col-span-1'>

                        <div className='sticky top-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6'>

                            <h3 className='text-lg font-bold text-white mb-5'>
                                Explore Features
                            </h3>

                            <div className='space-y-3'>
                                {sections.map((section, index) => (
                                    <a
                                        key={index}
                                        href={`#section-${index}`}
                                        className='
                      block w-full text-left
                      px-4 py-3
                      rounded-2xl
                      bg-white/5 hover:bg-white/10
                      border border-white/10
                      text-gray-300 hover:text-white
                      transition-all duration-300
                      cursor-pointer
                    '
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className='lg:col-span-3 space-y-8'>

                        {sections.map((section, index) => (
                            <div
                                id={`section-${index}`}
                                key={index}
                                className='
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  overflow-hidden
                  scroll-mt-24
                '
                            >

                                <div className='border-b border-white/10 px-6 py-5 bg-black/20'>
                                    <h2 className='text-2xl md:text-3xl font-bold text-white'>
                                        {section.title}
                                    </h2>
                                </div>

                                <div className='p-6'>

                                    <p className='text-gray-400 leading-relaxed text-base md:text-lg'>
                                        {section.description}
                                    </p>

                                    <div className='mt-6 space-y-4'>
                                        {section.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className='
                          flex items-center gap-4
                          rounded-2xl
                          border border-white/10
                          bg-black/20
                          px-5 py-4
                        '
                                            >

                                                <div className='
                          w-10 h-10
                          rounded-xl
                          bg-gradient-to-r from-cyan-500 to-blue-500
                          flex items-center justify-center
                          text-white font-bold
                          shadow-lg
                        '>
                                                    {itemIndex + 1}
                                                </div>

                                                <div>
                                                    <p className='text-white font-medium'>
                                                        {item}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Code Block */}
                                    <div className='mt-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0B1120]'>

                                        <div className='flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/20'>
                                            <span className='text-sm text-gray-400'>
                                                Quick Preview
                                            </span>

                                            <button
                                                onClick={() =>
                                                    navigator.clipboard.writeText(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`)
                                                }
                                                className='
                          text-xs
                          px-3 py-1
                          rounded-lg
                          bg-white/10 hover:bg-white/20
                          text-gray-300
                          transition-all duration-300
                          cursor-pointer
                        '
                                            >
                                                Copy
                                            </button>
                                        </div>

                                        <pre className='p-5 overflow-x-auto text-sm leading-7 text-green-400'>
                                            {`function fibonacci(n) {
  if (n <= 1) return n;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'>

                <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-900/30 via-black/40 to-purple-900/30 backdrop-blur-2xl p-8 md:p-14 text-center'>

                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]'></div>

                    <div className='relative z-10'>
                        <h2 className='text-3xl md:text-5xl font-black text-white leading-tight'>
                            Build smarter with AI
                        </h2>

                        <p className='mt-5 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>
                            Experience a modern AI-powered coding assistant designed for developers and learners.
                        </p>

                        <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>

                            <Link
                                href='/'
                                className='
                  w-full sm:w-auto
                  px-8 py-4
                  rounded-2xl
                  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
                  text-white font-semibold
                  shadow-2xl
                  hover:scale-[1.03]
                  transition-all duration-300
                  text-center
                '
                            >
                                Get Started
                            </Link>

                            <Link
                                href='/feature'
                                className='
                  w-full sm:w-auto
                  px-8 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/5 hover:bg-white/10
                  text-gray-200 font-semibold
                  transition-all duration-300
                  text-center
                '
                            >
                                Explore Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}