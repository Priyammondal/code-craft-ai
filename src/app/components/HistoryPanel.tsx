import React from 'react'
import { HistoryItem } from '../types'

interface HistoryItemProps {
  history: HistoryItem[];
}

const HistoryPanel = ({ history }: HistoryItemProps) => {

  const formatContent = (
    content: string,
    maxLength: number = 100
  ): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  }

  const getTypeConfig = (type: HistoryItem["type"]) => {
    switch (type) {
      case "explain":
        return {
          color: "from-purple-500 to-pink-500",
          icon: "🔍",
          bg: "bg-purple-500/10"
        }

      case "debug":
        return {
          color: "from-red-500 to-orange-500",
          icon: "🐛",
          bg: "bg-red-500/10"
        }

      case "generate":
        return {
          color: "from-green-500 to-blue-500",
          icon: "⚡",
          bg: "bg-green-500/10"
        }

      default:
        return {
          color: "from-gray-500 to-gray-600",
          icon: "📝",
          bg: "bg-gray-500/10"
        };
    }
  }

  return (
    <div
      className='
        bg-gray-900/60
        backdrop-blur-2xl
        rounded-3xl
        shadow-2xl
        border border-white/10
        overflow-hidden
        h-full
      '
    >

      {/* Header */}
      <div className='px-6 py-4 border-b border-white/10 bg-black/20'>

        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold text-white'>
            Recent Activity
          </h2>

          <div className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400'>
            {history.length} item(s)
          </div>
        </div>

        <p className='text-gray-400 text-sm mt-2'>
          Your recent AI interactions
        </p>
      </div>

      {/* Scrollable Content */}
      <div
        className='
          p-4
          max-h-[650px]
          overflow-y-auto
          scrollbar-thin
          scrollbar-thumb-white/10
          scrollbar-track-transparent
        '
      >

        {history.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-16 text-center'>

            <div className='
              w-20 h-20
              rounded-2xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
              mb-5
            '>
              <span className='text-4xl'>
                📚
              </span>
            </div>

            <p className='text-gray-300 text-base font-medium'>
              No activity yet
            </p>

            <p className='text-gray-500 text-sm mt-2 max-w-xs'>
              Your recent explanations, debugging sessions,
              and generated code will appear here.
            </p>
          </div>
        ) : (
          <div className='space-y-4'>

            {history.map((item) => {
              const config = getTypeConfig(item.type);

              return (
                <div
                  key={item.id}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    ${config.bg}
                    backdrop-blur-xl
                    p-4
                    hover:border-white/20
                    transition-all duration-300
                  `}
                >

                  {/* Glow */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-10
                      bg-gradient-to-br ${config.color}
                      transition-opacity duration-300
                    `}
                  ></div>

                  {/* Top */}
                  <div className='relative z-10 flex items-start justify-between gap-3 mb-4'>

                    <div className='flex items-center gap-3'>

                      <div
                        className={`
                          w-10 h-10
                          rounded-xl
                          bg-gradient-to-r ${config.color}
                          flex items-center justify-center
                          text-lg
                          shadow-lg
                        `}
                      >
                        {config.icon}
                      </div>

                      <div>
                        <p className='text-white font-semibold capitalize text-sm'>
                          {item.type}
                        </p>

                        <p className='text-xs text-gray-500'>
                          AI Interaction
                        </p>
                      </div>
                    </div>

                    <span className='text-[11px] text-gray-500 whitespace-nowrap'>
                      {item.timestamp}
                    </span>
                  </div>

                  {/* Content */}
                  <div className='relative z-10 space-y-4'>

                    {/* Input */}
                    <div>
                      <p className='text-xs uppercase tracking-wide text-gray-500 mb-2'>
                        Input
                      </p>

                      <div className='rounded-xl bg-black/20 border border-white/5 p-3'>
                        <p className='text-sm text-gray-200 whitespace-pre-wrap leading-relaxed break-words'>
                          {formatContent(item.input, 80)}
                        </p>
                      </div>
                    </div>

                    {/* Output */}
                    <div>
                      <p className='text-xs uppercase tracking-wide text-gray-500 mb-2'>
                        Output
                      </p>

                      <div className='rounded-xl bg-black/20 border border-white/5 p-3'>
                        <p className='text-sm text-gray-300 whitespace-pre-wrap leading-relaxed break-words'>
                          {formatContent(item.output, 120)}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HistoryPanel