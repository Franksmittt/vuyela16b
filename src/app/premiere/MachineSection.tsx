'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const divisions = [
  {
    key: 'bulk',
    num: '01',
    name: 'Vuyela Bulk',
    short: 'Bulk',
    line: 'Warehousing & handling',
    copy: 'Bonded storage, stockpiling, and containerization from the Elandsfontein yard — cargo under our roof, under our watch.',
    image: '/images/machine/bulk.webp',
    href: '/services/bulk',
    tone: 'light' as const,
  },
  {
    key: 'logistics',
    num: '02',
    name: 'Vuyela Logistics',
    short: 'Logistics',
    line: 'Road freight & transport',
    copy: 'Own fleet. Own standards. Live tracking from gate-out to gate-in across South Africa.',
    image: '/images/machine/logistics.webp',
    href: '/services/logistics',
    tone: 'dark' as const,
  },
  {
    key: 'freight',
    num: '03',
    name: 'Vuyela Freight',
    short: 'Freight',
    line: 'Ocean freight & customs',
    copy: 'Port to inland, cleared and sequenced — shipping-line relationships that move cargo when the clock is tight.',
    image: '/images/machine/freight.webp',
    href: '/services/freight',
    tone: 'light' as const,
  },
  {
    key: 'refuel',
    num: '04',
    name: 'Vuyela Refuel',
    short: 'Refuel',
    line: 'Energy solutions',
    copy: '50ppm diesel with a quality protocol that refuses shortcuts. Fuel that keeps the machine running.',
    image: '/images/machine/refuel.webp',
    href: '/services/refuel',
    tone: 'dark' as const,
  },
];

function DivisionPanel({
  d,
  index,
  onActive,
}: {
  d: (typeof divisions)[number];
  index: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.45 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1, 1.06]
  );

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  const dark = d.tone === 'dark';

  return (
    <article
      ref={ref}
      id={`div-${d.key}`}
      className={`pm-machine-panel relative min-h-[100dvh] overflow-hidden ${
        dark
          ? 'bg-[var(--pm-night)] text-[var(--pm-paper)]'
          : 'bg-[var(--pm-paper)] text-[var(--pm-ink)]'
      }`}
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 will-change-transform md:left-[40%]"
      >
        <Image
          src={d.image}
          alt={d.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={index === 0}
        />
        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-gradient-to-r from-[var(--pm-night)] via-[var(--pm-night)]/85 to-transparent max-md:bg-gradient-to-t max-md:from-[var(--pm-night)] max-md:via-[var(--pm-night)]/75 max-md:to-[var(--pm-night)]/25'
              : 'bg-gradient-to-r from-[var(--pm-paper)] via-[var(--pm-paper)]/88 to-transparent max-md:bg-gradient-to-t max-md:from-[var(--pm-paper)] max-md:via-[var(--pm-paper)]/82 max-md:to-transparent'
          }`}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-end px-6 pb-20 pt-32 md:items-center md:px-10 md:pb-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md md:max-w-lg"
        >
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
              dark ? 'text-[var(--pm-yellow)]' : 'text-[var(--pm-yellow-deep)]'
            }`}
          >
            {d.num} · {d.line}
          </motion.p>
          <p
            className={`pm-display select-none text-[clamp(5rem,16vw,9rem)] font-bold leading-none ${
              dark ? 'text-white/[0.07]' : 'text-[var(--pm-ink)]/[0.06]'
            }`}
            aria-hidden
          >
            {d.num}
          </p>
          <h3 className="pm-display -mt-8 text-[clamp(2.1rem,4.8vw,3.5rem)] font-bold leading-[0.95] md:-mt-12">
            {d.name}
          </h3>
          <p
            className={`mt-5 text-base leading-relaxed md:text-lg ${
              dark ? 'text-[var(--pm-paper)]/75' : 'text-[var(--pm-ink-soft)]'
            }`}
          >
            {d.copy}
          </p>
          <Link
            href={d.href}
            className={`group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] underline-offset-4 hover:underline ${
              dark ? 'text-[var(--pm-yellow)]' : 'text-[var(--pm-ink)]'
            }`}
          >
            Open division
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </article>
  );
}

function scrollToDivision(key: string) {
  const el = document.getElementById(`div-${key}`);
  if (!el) return;
  // Clear header (~4.5rem) + fixed division index (~3.5rem)
  const offset = 140;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function DivisionIndex({
  active,
  visible,
}: {
  active: number;
  visible: boolean;
}) {
  return (
    <nav
      aria-label="Divisions"
      aria-hidden={!visible}
      className={`fixed left-0 right-0 top-[4.5rem] z-40 border-b border-[var(--pm-ink)]/10 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-2 opacity-0'
      }`}
    >
      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-7xl items-stretch px-8 lg:flex">
        <motion.div
          className="pointer-events-none absolute bottom-0 top-0 bg-[var(--pm-ink)]"
          initial={false}
          animate={{
            left: `${(active / divisions.length) * 100}%`,
            width: `${100 / divisions.length}%`,
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 32 }}
        />
        {divisions.map((d, i) => {
          const isActive = active === i;
          return (
            <button
              key={d.key}
              type="button"
              tabIndex={visible ? 0 : -1}
              onClick={() => scrollToDivision(d.key)}
              className={`relative z-10 flex-1 border-r border-[var(--pm-ink)]/8 px-4 py-3.5 text-left transition-colors last:border-r-0 ${
                isActive
                  ? 'text-[var(--pm-yellow)]'
                  : 'text-[var(--pm-ink)] hover:text-[var(--pm-ink-soft)]'
              }`}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">
                {d.num}
              </span>
              <span className="pm-display mt-1 block text-base font-bold tracking-[0.04em]">
                {d.short}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile chips */}
      <div className="flex gap-1 overflow-x-auto px-3 py-2 lg:hidden [scrollbar-width:none]">
        {divisions.map((d, i) => {
          const isActive = active === i;
          return (
            <button
              key={d.key}
              type="button"
              tabIndex={visible ? 0 : -1}
              onClick={() => scrollToDivision(d.key)}
              className={`shrink-0 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? 'bg-[var(--pm-ink)] text-[var(--pm-yellow)]'
                  : 'text-[var(--pm-ink-soft)]'
              }`}
            >
              {d.short}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default function MachineSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelsAnchorRef = useRef<HTMLDivElement>(null);
  const panelsInView = useInView(panelsAnchorRef, {
    margin: '-12% 0px -20% 0px',
    amount: 0,
  });
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ['start end', 'end start'],
  });
  const introFade = useTransform(introProgress, [0.15, 0.85], [1, 0.35]);

  return (
    <section id="machine" ref={sectionRef} className="relative">
      <DivisionIndex active={active} visible={panelsInView} />

      <motion.div
        ref={introRef}
        style={{ opacity: introFade }}
        className="border-b border-[var(--pm-ink)]/10 bg-[var(--pm-paper)] px-6 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              03 · The Machine
            </p>
            <h2 className="pm-display max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              Four divisions.
              <span className="text-[var(--pm-yellow-deep)]"> One house.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[var(--pm-ink-soft)]">
              Scroll the machine — each division is a full chapter, not a card
              in a grid.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div ref={panelsAnchorRef}>
        {divisions.map((d, i) => (
          <DivisionPanel key={d.key} d={d} index={i} onActive={setActive} />
        ))}
      </div>
    </section>
  );
}
