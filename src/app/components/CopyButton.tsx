"use client";

interface CopyButtonProps {
    text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
    };

    return (
        <button
            onClick={handleCopy}
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
    );
};

export default CopyButton;