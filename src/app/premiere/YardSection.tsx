'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const copy = {
  kicker: '02 · The Yard',
  title: (
    <>
      Built where
      <br />
      the cargo lives
    </>
  ),
  body: 'Main Reef Road, Elandsfontein — containers, bulk stockpiles, yellow fleet, and reach stackers on the same dirt. This is the machine at ground truth.',
};

const frames = [
  {
    src: '/images/yard/aerial.webp',
    alt: 'Aerial of the yard',
    label: 'Scale',
  },
  {
    src: '/images/yard/loader.webp',
    alt: 'Loader on stockpile',
    label: 'Bulk',
  },
  {
    src: '/images/yard/fleet.webp',
    alt: 'Yellow fleet lined up',
    label: 'Fleet',
  },
  {
    src: '/images/yard/stacker.webp',
    alt: 'Reach stacker at work',
    label: 'Lift',
  },
];

/** Locked Strip layout for The Yard */
export default function YardSection() {
  return (
    <section id="yard" className="bg-[var(--pm-night)] text-[var(--pm-paper)]">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-10 md:pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
              {copy.kicker}
            </p>
            <h2 className="pm-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[0.95]">
              {copy.title}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-[var(--pm-paper)]/75 md:text-lg lg:pb-2"
          >
            {copy.body}
          </motion.p>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto pb-16 pt-4 [scrollbar-width:thin]">
        <div className="flex min-w-max gap-4 px-6 md:gap-5 md:px-10">
          {frames.map((frame, i) => (
            <motion.figure
              key={frame.src}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="relative h-[58vh] w-[72vw] max-w-[520px] shrink-0 overflow-hidden md:h-[64vh] md:w-[42vw]"
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 72vw, 42vw"
              />
              <figcaption className="absolute left-4 top-4 bg-[var(--pm-ink)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--pm-yellow)]">
                {frame.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
