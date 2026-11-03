'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import AnimatedVuyelaLogo from './AnimatedVuyelaLogo';
import PremiereHeader from './PremiereHeader';

const chapters = [
  { id: 'arrive', label: 'Arrive' },
  { id: 'yard', label: 'Yard' },
  { id: 'machine', label: 'Machine' },
  { id: 'proof', label: 'Proof' },
  { id: 'people', label: 'People' },
  { id: 'close', label: 'Close' },
] as const;

const divisions = [
  {
    key: 'bulk',
    name: 'Vuyela Bulk',
    line: 'Warehousing & handling',
    copy: 'Bonded storage, stockpiling, and containerization from the Elandsfontein yard — cargo under our roof, under our watch.',
    image: '/images/bulk-warehouse-facilities.png',
    href: '/services/bulk',
    tone: 'paper' as const,
  },
  {
    key: 'logistics',
    name: 'Vuyela Logistics',
    line: 'Road freight & transport',
    copy: 'Own fleet. Own standards. Live tracking from gate-out to gate-in across South Africa.',
    image: '/images/facility-trucks.png',
    href: '/services/logistics',
    tone: 'steel' as const,
  },
  {
    key: 'freight',
    name: 'Vuyela Freight',
    line: 'Ocean freight & customs',
    copy: 'Port to inland, cleared and sequenced — shipping-line relationships that move cargo when the clock is tight.',
    image: '/images/freight-container-terminal.png',
    href: '/services/freight',
    tone: 'sky' as const,
  },
  {
    key: 'refuel',
    name: 'Vuyela Refuel',
    line: 'Energy solutions',
    copy: '50ppm diesel with a quality protocol that refuses shortcuts. Fuel that keeps the machine running.',
    image: '/images/refuel-operations.png',
    href: '/services/refuel',
    tone: 'night' as const,
  },
];

const proofs = [
  { label: 'Operations', value: '24/7' },
  { label: 'Weighbridges', value: 'SOLAS' },
  { label: 'Warehouse', value: 'SARS Bonded' },
  { label: 'Safety', value: 'NOSA' },
  { label: 'Fleet', value: 'Owned' },
  { label: 'Yard', value: 'Camera Covered' },
];

function Placeholder({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`pm-placeholder ${className}`} aria-label={label}>
      <span className="px-6 leading-relaxed">
        Placeholder
        <br />
        {label}
      </span>
    </div>
  );
}

function ShippingContainer({ rotateY }: { rotateY: number }) {
  // SVG isometric — CSS 3D is flattened by ancestor overflow-x-hidden
  const tilt = Math.max(-6, Math.min(6, rotateY * 0.2));
  return (
    <div className="pm-stage" aria-hidden="true">
      <div className="pm-container-float">
        <div
          className="pm-iso-svg-wrap"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          <svg
            className="pm-iso-svg"
            viewBox="0 0 640 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="isoSide" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d8d1c4" />
                <stop offset="50%" stopColor="#a8a193" />
                <stop offset="100%" stopColor="#7a7368" />
              </linearGradient>
              <linearGradient id="isoTop" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f2ebdd" />
                <stop offset="100%" stopColor="#b7b09f" />
              </linearGradient>
              <linearGradient id="isoDoor" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f5d000" />
                <stop offset="55%" stopColor="#e6b800" />
                <stop offset="100%" stopColor="#9a7a00" />
              </linearGradient>
              <filter
                id="isoShadow"
                x="-15%"
                y="-10%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="4"
                  dy="20"
                  stdDeviation="14"
                  floodColor="#1c1a17"
                  floodOpacity="0.2"
                />
              </filter>
            </defs>

            <g filter="url(#isoShadow)">
              {/* Roof */}
              <polygon
                points="150,78 510,38 590,98 230,138"
                fill="url(#isoTop)"
                stroke="#3f3a34"
                strokeWidth="2.5"
              />
              {[0.15, 0.3, 0.45, 0.6, 0.75, 0.9].map((t) => (
                <line
                  key={`top-${t}`}
                  x1={150 + (510 - 150) * t}
                  y1={78 + (38 - 78) * t}
                  x2={230 + (590 - 230) * t}
                  y2={138 + (98 - 138) * t}
                  stroke="rgba(28,26,23,0.14)"
                  strokeWidth="2"
                />
              ))}

              {/* Long corrugated side (facing camera) */}
              <polygon
                points="230,138 590,98 590,258 230,298"
                fill="url(#isoSide)"
                stroke="#3f3a34"
                strokeWidth="2.5"
              />
              {[0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 0.78, 0.88].map(
                (t) => (
                  <line
                    key={`rib-${t}`}
                    x1={230 + (590 - 230) * t}
                    y1={138 + (98 - 138) * t}
                    x2={230 + (590 - 230) * t}
                    y2={298 + (258 - 298) * t}
                    stroke="rgba(28,26,23,0.2)"
                    strokeWidth="3"
                  />
                )
              )}

              {/* Brand plate */}
              <g transform="translate(390,198) skewY(-6.5)">
                <rect
                  x="-52"
                  y="-15"
                  width="104"
                  height="30"
                  rx="1"
                  fill="#141414"
                  stroke="#ffd700"
                  strokeWidth="1.5"
                />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#ffd700"
                  fontFamily="var(--font-family-display), Arial Black, sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="2.5"
                >
                  VUYELA
                </text>
              </g>

              {/* Yellow doors — near short end */}
              <polygon
                points="150,78 230,138 230,298 150,238"
                fill="url(#isoDoor)"
                stroke="#3f3a34"
                strokeWidth="2.5"
              />
              <line
                x1="190"
                y1="108"
                x2="190"
                y2="268"
                stroke="#3f3a34"
                strokeWidth="2.5"
              />
              <line
                x1="168"
                y1="120"
                x2="168"
                y2="255"
                stroke="#2a2622"
                strokeWidth="4"
              />
              <line
                x1="212"
                y1="132"
                x2="212"
                y2="268"
                stroke="#2a2622"
                strokeWidth="4"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function PremiereClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const containerRotate = useTransform(heroProgress, [0, 1], [0, 28]);
  const heroFade = useTransform(heroProgress, [0, 0.75], [1, 0]);
  const heroLift = useTransform(heroProgress, [0, 1], [0, -80]);
  const progressWidth = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
    { stiffness: 80, damping: 28 }
  );

  const [rotateY, setRotateY] = useState(0);
  useMotionValueEvent(containerRotate, 'change', (v) => setRotateY(v));

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(chapters.length - 1, Math.floor(v * chapters.length));
    setActiveChapter(idx);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={rootRef} className="premiere-root relative">
      {/* Progress rail */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-[var(--pm-paper-deep)]">
        <motion.div
          className="h-full bg-[var(--pm-yellow)]"
          style={{ width: progressWidth }}
        />
      </div>

      <PremiereHeader activeChapter={activeChapter} onNavigate={scrollTo} />

      {/* Chapter dots */}
      <nav
        aria-label="Premiere chapters"
        className="fixed right-4 md:right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex"
      >
        {chapters.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className="pm-nav-dot"
            data-active={activeChapter === i}
            aria-label={c.label}
            onClick={() => scrollTo(c.id)}
          />
        ))}
      </nav>

      {/* 1 — ARRIVAL */}
      <section
        id="arrive"
        ref={heroRef}
        className="pm-chapter relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 70% 40%, #eef3f7 0%, var(--pm-paper) 55%, var(--pm-yard) 100%)',
        }}
      >
        <div className="pm-grain" />
        <motion.div
          style={{ opacity: heroFade, y: heroLift }}
          className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-24 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pt-32 lg:gap-16"
        >
          <div>
            <p className="pm-hero-brand mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              Elandsfontein · South Africa
            </p>
            <h1 className="pm-hero-brand sr-only">Vuyela Group</h1>
            <div className="pm-hero-brand">
              <AnimatedVuyelaLogo size="hero" animate />
            </div>
            <p className="pm-hero-line mt-8 max-w-md text-lg leading-relaxed text-[var(--pm-ink-soft)] md:text-xl">
              A logistics house built in the yard — not the boardroom.
            </p>
            <div className="pm-hero-cta mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('yard')}
                className="inline-flex items-center gap-3 bg-[var(--pm-ink)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
              >
                Enter the Yard
                <span aria-hidden>↓</span>
              </button>
              <Link
                href="/"
                className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--pm-muted)] underline-offset-4 hover:text-[var(--pm-ink)] hover:underline"
              >
                Current site
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[420px]">
            <div
              className="absolute inset-[12%] rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(230,184,0,0.28), transparent 70%)',
              }}
            />
            <ShippingContainer rotateY={rotateY} />
          </div>
        </motion.div>

        <p className="pm-scroll-hint absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[var(--pm-muted)]">
          Scroll the film
        </p>
      </section>

      {/* 2 — SCALE / YARD */}
      <section
        id="yard"
        className="pm-chapter relative overflow-hidden bg-[var(--pm-night)] text-[var(--pm-paper)]"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/facilities-aerial-view.png"
            alt="Vuyela Elandsfontein facility aerial"
            fill
            className="object-cover opacity-55"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--pm-night)] via-[var(--pm-night)]/85 to-transparent" />
        </div>
        <div
          className="pm-wipe"
          style={{ animation: 'pm-accent-draw 1s ease both' }}
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
              02 · The Yard
            </p>
            <h2 className="pm-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[0.95]">
              Built where
              <br />
              the cargo lives
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--pm-paper)]/75 md:text-lg">
              Main Reef Road, Elandsfontein. Aerial proof of a working machine —
              weighbridges, bonded space, fleet staging, and the ground truth of
              South African logistics.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/images/home-facility-aerial.png"
              alt="Vuyela yard detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 3 — THE MACHINE (divisions as chapters) */}
      <section id="machine" className="relative bg-[var(--pm-paper)]">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-24 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              03 · The Machine
            </p>
            <h2 className="pm-display max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              Four divisions.
              <span className="text-[var(--pm-yellow-deep)]"> One house.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[var(--pm-ink-soft)]">
              Move through the group — not a grid of equal cards. Each chapter
              is a door into how Vuyela actually works.
            </p>
          </motion.div>
        </div>

        {divisions.map((d, i) => {
          const bg =
            d.tone === 'paper'
              ? 'var(--pm-paper)'
              : d.tone === 'steel'
                ? 'var(--pm-paper-deep)'
                : d.tone === 'sky'
                  ? 'var(--pm-sky)'
                  : 'var(--pm-night)';
          const fg = d.tone === 'night' ? 'var(--pm-paper)' : 'var(--pm-ink)';
          const muted =
            d.tone === 'night' ? 'rgba(243,239,230,0.7)' : 'var(--pm-ink-soft)';

          return (
            <article
              key={d.key}
              id={`div-${d.key}`}
              className="relative min-h-[85vh] overflow-hidden"
              style={{ background: bg, color: fg }}
            >
              <div className="mx-auto grid min-h-[85vh] w-full max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75 }}
                  className={i % 2 === 1 ? 'md:order-2' : ''}
                >
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.28em]"
                    style={{
                      color:
                        d.tone === 'night'
                          ? 'var(--pm-yellow)'
                          : 'var(--pm-yellow-deep)',
                    }}
                  >
                    0{i + 1} · {d.line}
                  </p>
                  <h3 className="pm-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[0.95]">
                    {d.name}
                  </h3>
                  <p
                    className="mt-5 max-w-md text-base leading-relaxed md:text-lg"
                    style={{ color: muted }}
                  >
                    {d.copy}
                  </p>
                  <Link
                    href={d.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] underline-offset-4 hover:underline"
                    style={{
                      color:
                        d.tone === 'night'
                          ? 'var(--pm-yellow)'
                          : 'var(--pm-ink)',
                    }}
                  >
                    Open division
                    <span aria-hidden>→</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className={`relative aspect-[5/4] w-full overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {d.key === 'refuel' && (
                    <div className="absolute inset-0 bg-[var(--pm-night)]/25" />
                  )}
                </motion.div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Truck emerging placeholder strip */}
      <section className="relative overflow-hidden bg-[var(--pm-paper-deep)] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[1fr_1.2fr] md:px-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              Fleet totem
            </p>
            <h3 className="pm-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight text-[var(--pm-ink)]">
              Container stage.
              <br />
              Truck emerges.
            </h3>
            <p className="mt-4 max-w-sm text-[var(--pm-ink-soft)]">
              When you have a cutout of a Vuyela truck on transparent plate,
              drop it here — same lighting language as the yard photography.
            </p>
          </div>
          <Placeholder
            label="Vuyela truck cutout PNG — product-lit, transparent"
            className="aspect-[16/9] w-full"
          />
        </div>
      </section>

      {/* 4 — PROOF */}
      <section
        id="proof"
        className="pm-chapter relative overflow-hidden bg-[var(--pm-paper)]"
      >
        <div className="pm-grain opacity-[0.05]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              04 · Proof
            </p>
            <h2 className="pm-display max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              Quiet facts.
              <span className="text-[var(--pm-yellow-deep)]">
                {' '}
                Loud standards.
              </span>
            </h2>
          </motion.div>

          <ul className="mt-14 grid grid-cols-2 gap-px bg-[var(--pm-steel)] md:grid-cols-3">
            {proofs.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-[var(--pm-paper)] px-6 py-10 md:px-8"
              >
                <p className="pm-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[var(--pm-ink)]">
                  {p.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--pm-muted)]">
                  {p.label}
                </p>
              </motion.li>
            ))}
          </ul>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/weighbridge-solas.png"
                alt="SOLAS certified weighbridge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <Placeholder
              label="Night yard still — amber floodlight plate"
              className="aspect-[16/10] w-full"
            />
          </div>
        </div>
      </section>

      {/* 5 — PEOPLE */}
      <section
        id="people"
        className="pm-chapter relative bg-[var(--pm-night-soft)] text-[var(--pm-paper)]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
              05 · People
            </p>
            <h2 className="pm-display max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[0.95]">
              Hands on the work.
              <br />
              Names on the door.
            </h2>
            <p className="mt-5 max-w-lg text-[var(--pm-paper)]/70">
              Directors who answer the phone. A team that runs the yard when the
              rest of the industry clocks out.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                name: 'Jaco Nagel',
                role: 'Director',
                image: '/images/staff/Jaco.jpg',
              },
              {
                name: 'Wayne Johnson',
                role: 'Director',
                image: '/images/staff/wayne.jpg',
              },
            ].map((person, i) => (
              <motion.figure
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--pm-night)]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--pm-night)] via-transparent to-transparent" />
                </div>
                <figcaption className="mt-4">
                  <p className="pm-display text-2xl font-bold">{person.name}</p>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--pm-yellow)]">
                    {person.role}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-12">
            <Placeholder
              label="Team strip — yard crew plate (optional)"
              className="aspect-[21/6] w-full min-h-[120px]"
            />
          </div>
        </div>
      </section>

      {/* 6 — CLOSE */}
      <section
        id="close"
        className="pm-chapter relative overflow-hidden"
        style={{
          background:
            'linear-gradient(165deg, var(--pm-paper) 0%, var(--pm-yard) 100%)',
        }}
      >
        <div className="pm-grain" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start px-6 py-28 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              06 · Close
            </p>
            <h2 className="pm-display text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              The gate is open.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-[var(--pm-ink-soft)]">
              Visit the yard. Speak to the people who run it. This site
              doesn&apos;t chase — it stands.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[var(--pm-ink)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="border border-[var(--pm-ink)]/25 bg-transparent px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pm-ink)] transition-colors hover:border-[var(--pm-ink)]"
              >
                About the Group
              </Link>
              <Link
                href="/"
                className="px-6 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-[var(--pm-muted)] underline-offset-4 hover:text-[var(--pm-ink)] hover:underline"
              >
                Brochure homepage
              </Link>
            </div>
            <address className="mt-14 not-italic text-sm leading-relaxed text-[var(--pm-muted)]">
              83 Main Reef Road, Elandsfontein, Gauteng
              <br />
              <a
                href="mailto:info@vuyelalogistics.co.za"
                className="text-[var(--pm-ink-soft)] hover:text-[var(--pm-ink)]"
              >
                info@vuyelalogistics.co.za
              </a>
            </address>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
