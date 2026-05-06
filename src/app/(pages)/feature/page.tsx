import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features",
    description:
        "Discover powerful CodeCraft AI features including AI code explanation, smart debugging, code generation, history tracking, and modern developer tools.",
    keywords: [
        "AI coding features",
        "Code debugger",
        "AI code generator",
        "Developer tools",
        "Programming assistant",
        "CodeCraft AI features",
    ],
};

export default function FeaturesPage() {
    const features = [
        {
            icon: '🧠',
            title: 'AI Code Explanation',
            description:
                'Understand complex code instantly with detailed AI-powered explanations and breakdowns.',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: '🐞',
            title: 'Smart Debugging',
            description:
                'Detect bugs, errors, and bad practices with intelligent debugging assistance.',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            icon: '⚡',
            title: 'Code Generation',
            description:
                'Generate production-ready code snippets in multiple programming languages.',
            gradient: 'from-purple-500 to-indigo-500',
        },
        {
            icon: '📜',
            title: 'History Tracking',
            description:
                'Access your previous AI conversations, generated code, and debugging sessions anytime.',
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            icon: '🌙',
            title: 'Modern UI',
            description:
                'Beautiful glassmorphism inspired interface with responsive layouts and animations.',
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            icon: '🚀',
            title: 'Lightning Fast',
            description:
                'Optimized for speed and performance to deliver near instant AI responses.',
            gradient: 'from-fuchsia-500 to-violet-500',
        },
    ]

    return (
        <div className='relative min-h-screen bg-[#030712] overflow-hidden'>

            {/* Background */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-[10%] left-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse'></div>

                <div className='absolute top-[20%] right-[10%] w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-300'></div>

                <div className='absolute bottom-[10%] left-[35%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700'></div>
            </div>

            {/* Hero */}
            <section className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10'>

                <div className='text-center max-w-4xl mx-auto'>

                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6'>
                        <span className='text-sm text-purple-300'>
                            ✨ Powerful AI Features
                        </span>
                    </div>

                    <h1 className='text-5xl md:text-7xl font-black leading-tight'>
                        <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent'>
                            Features Built
                        </span>

                        <br />

                        <span className='text-white'>
                            for Developers
                        </span>
                    </h1>

                    <p className='mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto'>
                        Supercharge your workflow with AI-powered tools for explaining,
                        debugging, and generating code faster than ever.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-white/20 transition-all duration-500 hover:-translate-y-1'
                        >

                            {/* Glow */}
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.gradient} transition-opacity duration-500`}
                            ></div>

                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl shadow-lg mb-6`}
                            >
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className='text-2xl font-bold text-white mb-3'>
                                {feature.title}
                            </h3>

                            <p className='text-gray-400 leading-relaxed text-sm md:text-base'>
                                {feature.description}
                            </p>

                            {/* Button */}
                            <Link
                                href='/docs'
                                className='
                  mt-6 inline-flex items-center gap-2
                  text-sm text-purple-300
                  hover:text-white
                  transition-colors duration-300
                '
                            >
                                Learn More

                                <span className='group-hover:translate-x-1 transition-transform duration-300'>
                                    →
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'>

                <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-purple-900/30 via-black/40 to-pink-900/30 backdrop-blur-2xl p-8 md:p-14 text-center'>

                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]'></div>

                    <div className='relative z-10'>
                        <h2 className='text-4xl md:text-5xl font-black text-white leading-tight'>
                            Ready to build smarter?
                        </h2>

                        <p className='mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed'>
                            Experience the next generation AI coding assistant designed to improve productivity and developer experience.
                        </p>

                        <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>

                            <Link
                                href='/'
                                className='
                  w-full sm:w-auto
                  px-8 py-4
                  rounded-2xl
                  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
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
                                href='/docs'
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
                                Explore Docs
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}