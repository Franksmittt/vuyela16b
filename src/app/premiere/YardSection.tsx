'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const variants = [
  {
    id: 'cinema',
    label: 'A · Cinema',
    blurb: 'Full-bleed aerial + floating copy',
  },
  {
    id: 'mosaic',
    label: 'B · Mosaic',
    blurb: 'Editorial split + operations strip',
  },
  {
    id: 'strip',
    label: 'C · Strip',
    blurb: 'Sticky headline + horizontal film',
  },
] as const;

type VariantId = (typeof variants)[number]['id'];

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

export default function YardSection() {
  const [variant, setVariant] = useState<VariantId>('cinema');

  return (
    <section id="yard" className="relative">
      {/* Compare picker — for choosing a direction */}
      <div className="sticky top-[4.6rem] z-30 border-b border-[var(--pm-ink)]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-sm font-semibold text-[var(--pm-ink)]">
            Yard section — pick a version
          </p>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => {
              const active = variant === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.id)}
                  className={`rounded-full px-4 py-2 text-left transition-colors ${
                    active
                      ? 'bg-[var(--pm-ink)] text-[var(--pm-yellow)]'
                      : 'bg-[var(--pm-paper-deep)] text-[var(--pm-ink)] hover:bg-[var(--pm-ink)]/10'
                  }`}
                >
                  <span className="block text-sm font-bold">{v.label}</span>
                  <span
                    className={`block text-[11px] ${active ? 'text-[var(--pm-yellow)]/80' : 'text-[var(--pm-muted)]'}`}
                  >
                    {v.blurb}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {variant === 'cinema' && <YardCinema />}
      {variant === 'mosaic' && <YardMosaic />}
      {variant === 'strip' && <YardStrip />}
    </section>
  );
}

function YardCinema() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[var(--pm-night)] text-[var(--pm-paper)]">
      <div className="absolute inset-0">
        <Image
          src="/images/yard/aerial.webp"
          alt="Aerial view of the Vuyela Elandsfontein yard"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--pm-night)] via-[var(--pm-night)]/55 to-[var(--pm-night)]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--pm-night)]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-end px-6 pb-20 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
            {copy.kicker}
          </p>
          <h2 className="pm-display text-[clamp(2.6rem,6.5vw,5rem)] font-bold leading-[0.94]">
            {copy.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--pm-paper)]/80 md:text-lg">
            {copy.body}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ['Place', 'Elandsfontein'],
              ['Mode', 'Bulk + containers'],
              ['Tempo', '24/7 yard'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-[var(--pm-yellow)]">
                  {k}
                </dt>
                <dd className="mt-1 text-lg font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}

function YardMosaic() {
  return (
    <div className="bg-[var(--pm-paper)] text-[var(--pm-ink)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow-deep)]">
            {copy.kicker}
          </p>
          <h2 className="pm-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[0.95]">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--pm-ink-soft)] md:text-lg">
            {copy.body}
          </p>
          <ul className="mt-8 space-y-3 text-sm font-semibold text-[var(--pm-ink)]">
            {[
              'Bulk stockpiles + bonded warehousing',
              'Own yellow fleet on the same ground',
              'Reach stackers moving line cargo daily',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-[var(--pm-yellow-deep)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]"
        >
          <Image
            src="/images/yard/loader.webp"
            alt="Yellow loader working bulk material in the Vuyela yard"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      <div className="border-t border-[var(--pm-ink)]/10 bg-[var(--pm-paper-deep)]">
        <div className="mx-auto grid max-w-7xl gap-3 px-6 py-6 md:grid-cols-3 md:px-10">
          {[
            {
              src: '/images/yard/aerial.webp',
              alt: 'Aerial yard overview',
              cap: 'Aerial scale',
            },
            {
              src: '/images/yard/fleet.webp',
              alt: 'Yellow Vuyela trucks in the yard',
              cap: 'Own fleet',
            },
            {
              src: '/images/yard/stacker.webp',
              alt: 'Reach stacker handling a container',
              cap: 'Container moves',
            },
          ].map((shot, i) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--pm-night)]/80 to-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {shot.cap}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function YardStrip() {
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

  return (
    <div className="bg-[var(--pm-night)] text-[var(--pm-paper)]">
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
    </div>
  );
}
