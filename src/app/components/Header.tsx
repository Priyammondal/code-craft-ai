import React from 'react'

const Header = () => {
  return (
    <div className='text-center mb-16'>

      <div className='flex items-center justify-center gap-4 mb-6'>

        {/* Logo */}
        <div className='w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hidden md:flex items-center justify-center shadow-lg shadow-purple-500/30'>
          <span className='text-3xl'>🤖</span>
        </div>

        {/* Title */}
        <h1 className='text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent'>
          CodeCraft AI
        </h1>
      </div>

      {/* Subtitle */}
      <p className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
        Your intelligent coding companion. Explain, debug, and generate code with AI-powered assistance.
      </p>
    </div>
  )
}

export default Header