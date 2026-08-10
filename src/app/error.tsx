'use client';

import { AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import BrandMark from '@/components/BrandMark';

interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleReset = () => {
    setIsRotating(true);
    setTimeout(() => {
      reset();
      setIsRotating(false);
    }, 600);
  };

  return (
    <div
      className={`min-h-[70vh] flex items-center justify-center bg-[#141414] p-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-md w-full border border-[#2e2e2e] bg-[#1a1a1a] p-8 text-center">
        <div className="flex justify-center mb-6">
          <BrandMark className="h-12 w-12" />
        </div>
        <div className="flex justify-center mb-4">
          <AlertCircle size={40} className="text-[#FFD700]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display uppercase tracking-wide">
          Something went wrong
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          {error.message || "We couldn't process your request at this time."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FFD700] text-[#141414] font-semibold uppercase tracking-wide hover:bg-white transition-colors"
          >
            <RefreshCw size={18} className={isRotating ? 'animate-spin' : ''} />
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-white/25 text-white font-semibold uppercase tracking-wide hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
          >
            Go Home
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
