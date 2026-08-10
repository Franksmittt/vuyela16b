'use client';

import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BrandMark from '@/components/BrandMark';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center px-4 bg-[#141414] text-white">
      <div className="text-center space-y-6 max-w-lg">
        <div className="flex justify-center">
          <BrandMark className="h-12 w-12" />
        </div>
        <p className="text-[#FFD700] font-display tracking-[0.2em] uppercase text-sm font-semibold">
          Vuyela Group
        </p>
        <h1 className="text-7xl md:text-8xl font-bold font-display tracking-tight text-[#FFD700]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold font-display uppercase tracking-wide">
          Page not found
        </h2>
        <p className="text-gray-400">
          This route isn&apos;t on our network. Let&apos;s get you back on the
          main road.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 bg-[#FFD700] text-[#141414] font-semibold uppercase tracking-wide hover:bg-white transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center h-12 px-6 border border-white/25 text-white font-semibold uppercase tracking-wide hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
