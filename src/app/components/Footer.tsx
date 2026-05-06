import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='relative z-10 mt-16 border-t border-white/10 bg-black/20 backdrop-blur-xl'>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>

                {/* Top Section */}
                <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10'>

                    {/* Brand */}
                    <div className='text-center lg:text-left max-w-lg'>
                        <h2
                            className='
                text-3xl font-extrabold
                bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500
                bg-clip-text text-transparent
              '
                        >
                            CodeCraft AI
                        </h2>

                        <p
                            className='
                text-gray-400
                mt-3
                text-sm sm:text-base
                leading-relaxed
              '
                        >
                            Your intelligent coding companion for explaining,
                            debugging, and generating code with AI-powered
                            assistance.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div
                        className='
              flex flex-wrap
              items-center justify-center
              gap-3 sm:gap-4
            '
                    >

                        {/* Features */}
                        <Link
                            href='/feature'
                            className='
                px-4 py-2
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border border-white/10
                text-sm text-gray-300
                hover:text-white
                transition-all duration-300
              '
                        >
                            Features
                        </Link>

                        {/* Docs */}
                        <Link
                            href='/docs'
                            className='
                px-4 py-2
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border border-white/10
                text-sm text-gray-300
                hover:text-white
                transition-all duration-300
              '
                        >
                            Docs
                        </Link>

                        {/* GitHub */}
                        <a
                            href='https://github.com/Priyammondal/code-craft-ai'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='
                px-4 py-2
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border border-white/10
                text-sm text-gray-300
                hover:text-white
                transition-all duration-300
              '
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className='my-8 border-t border-white/10'></div>

                {/* Bottom Section */}
                <div
                    className='
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            text-center md:text-left
          '
                >

                    <p className='text-sm text-gray-500'>
                        © 2026 CodeCraft AI. All rights reserved.
                    </p>

                    <div
                        className='
              flex flex-wrap
              items-center justify-center
              gap-2
              text-sm text-gray-500
            '
                    >
                        <span>Powered by</span>

                        <span className='text-purple-400 font-medium'>
                            Google Gemini AI
                        </span>

                        <span className='hidden sm:inline'>•</span>

                        <span>Built with 💖 using Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer