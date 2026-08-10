'use client';

import { motion } from 'framer-motion';
import BrandMark from '@/components/BrandMark';

export default function Loading() {
  return (
    <div className="min-h-[50vh] bg-[#141414] flex flex-col items-center justify-center p-4">
      <motion.div
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="flex flex-col items-center gap-4"
      >
        <BrandMark className="h-12 w-12" />
        <p className="text-[#FFD700] font-display tracking-[0.2em] uppercase text-sm font-semibold">
          Vuyela Group
        </p>
        <p className="text-gray-400 text-sm">Loading...</p>
      </motion.div>
    </div>
  );
}
