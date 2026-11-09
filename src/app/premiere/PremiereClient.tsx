'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import MachineSection from './MachineSection';
import PremiereHeader from './PremiereHeader';
import YardSection from './YardSection';

const chapters = [
  { id: 'arrive', label: 'Arrive' },
  { id: 'yard', label: 'Yard' },
  { id: 'machine', label: 'Machine' },
  { id: 'proof', label: 'Proof' },
  { id: 'team', label: 'Team' },
  { id: 'close', label: 'Close' },
] as const;

const proofs = [
  { label: 'Operations', value: '24/7' },
  { label: 'Weighbridges', value: 'SOLAS' },
  { label: 'Warehouse', value: 'SARS Bonded' },
  { label: 'Safety', value: 'NOSA' },
  { label: 'Fleet', value: 'Owned' },
  { label: 'Yard', value: 'Camera Covered' },
];

/** Full roster — name + role only (no personal contact details) */
const teamMembers = [
  { name: 'Jaco Nagel', role: 'Director', image: '/images/staff/Jaco.jpg' },
  {
    name: 'Wayne Johnson',
    role: 'Director',
    image: '/images/staff/wayne.jpg',
  },
  {
    name: 'Melissa Johnson',
    role: 'Accounts Manager',
    image: '/images/staff/Melissa.jpg',
  },
  {
    name: 'Aneri Nagel',
    role: 'HR Manager',
    image: '/images/staff/Aneri.jpeg',
  },
  {
    name: 'Richard Clark',
    role: 'General Manager',
    image: '/images/staff/richard.jpg',
  },
  {
    name: 'Monique',
    role: 'Shipping Co-Ordinator',
    image: '/images/staff/monique.jpg',
  },
  {
    name: 'Verushka Rossouw',
    role: 'Administration',
    image: '/images/staff/verushka.jpg',
  },
  {
    name: 'Mala Dorsamy',
    role: 'Operations',
    image: '/images/staff/mala.png',
  },
  {
    name: 'Mike Dorsamy',
    role: 'Operations',
    image: '/images/staff/mike.png',
  },
  {
    name: 'Karina Rossouw',
    role: 'Operations',
    image: '/images/staff/karina.jpg',
  },
  {
    name: 'Deon Rossouw',
    role: 'Refuel Operations',
    image: '/images/staff/deon.jpg',
  },
  {
    name: 'Reinhard Strydom',
    role: 'Yard Manager',
    image: '/images/staff/reinhardt.jpg',
  },
  {
    name: 'Sipho Shabalala',
    role: 'Logistics Team Leader',
    image: '/images/staff/sipho.png',
  },
  {
    name: 'Shine Lombard',
    role: 'Stock Administration',
    image: '/images/staff/shine.jpg',
  },
  {
    name: 'Alan Kirkhoff',
    role: 'Security',
    image: '/images/staff/alan.jpg',
  },
  {
    name: 'Charmaine Erasmus',
    role: 'Weighbridge Clerk',
    image: '/images/staff/charmaine.png',
  },
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

function HangingContainer({
  side,
  src,
}: {
  side: 'left' | 'right';
  src: string;
}) {
  return (
    <div className={`pm-hang pm-hang--${side}`} aria-hidden="true">
      <div className="pm-hang-inner">
        <Image
          src={src}
          alt=""
          width={864}
          height={1152}
          priority
          className="pm-hang-img"
          sizes="(max-width: 768px) 48vw, 30vw"
        />
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

  const heroFade = useTransform(heroProgress, [0, 0.75], [1, 0]);
  const heroLift = useTransform(heroProgress, [0, 1], [0, -40]);
  const progressWidth = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
    { stiffness: 80, damping: 28 }
  );

  // Section-based spy — Machine is much taller than Arrive, so equal
  // scroll-progress buckets always highlighted the wrong chapter.
  useEffect(() => {
    const updateActive = () => {
      // Marker in the upper third so the in-view chapter wins even when
      // the previous section's bottom still peeks under the header.
      const marker = Math.max(120, window.innerHeight * 0.28);
      let current = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= marker) current = i;
      });
      setActiveChapter(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const activeId = chapters[activeChapter]?.id ?? 'arrive';

  return (
    <div ref={rootRef} className="premiere-root relative">
      {/* Progress rail */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-[var(--pm-paper-deep)]">
        <motion.div
          className="h-full bg-[var(--pm-yellow)]"
          style={{ width: progressWidth }}
        />
      </div>

      <PremiereHeader activeId={activeId} onNavigate={scrollTo} />

      {/* Chapter dots */}
      <nav
        aria-label="Premiere chapters"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex md:right-8"
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

      {/* 1 — ARRIVAL: Sendify-style hanging containers L/R */}
      <section
        id="arrive"
        ref={heroRef}
        className="pm-chapter pm-hero-hang relative overflow-hidden bg-white"
      >
        <div className="pm-grain opacity-[0.04]" />

        <HangingContainer
          side="left"
          src="/images/brand/container-left-dark.webp"
        />
        <HangingContainer
          side="right"
          src="/images/brand/container-right-yellow.webp"
        />

        <motion.div
          style={{ opacity: heroFade, y: heroLift }}
          className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-3xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center md:px-10"
        >
          <p className="pm-hero-brand mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-ink-soft)]">
            Elandsfontein · South Africa
          </p>
          <h1 className="pm-hero-brand pm-display text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[0.95] tracking-tight text-[var(--pm-ink)]">
            Precision logistics.
            <span className="mt-2 block text-[var(--pm-yellow-deep)]">
              Built in the yard.
            </span>
          </h1>
          <p className="pm-hero-line mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[var(--pm-ink-soft)] md:text-xl">
            Locally invested, globally connected — cargo under our watch from
            gate-in to gate-out, 24/7.
          </p>
          <div className="pm-hero-cta mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo('yard')}
              className="inline-flex items-center gap-3 rounded-full bg-[var(--pm-ink)] px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
            >
              Enter the Yard
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--pm-yellow)] text-[var(--pm-ink)]"
                aria-hidden
              >
                ↓
              </span>
            </button>
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--pm-ink-soft)] underline-offset-4 hover:text-[var(--pm-ink)] hover:underline"
            >
              Main site
            </Link>
          </div>
        </motion.div>

        <p className="pm-scroll-hint absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[var(--pm-muted)]">
          Scroll the film
        </p>
      </section>

      {/* 2 — THE YARD */}
      <YardSection />

      {/* 3 — THE MACHINE */}
      <MachineSection />

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

      {/* 5 — TEAM */}
      <section
        id="team"
        className="pm-chapter relative bg-[var(--pm-night-soft)] text-[var(--pm-paper)]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
              05 · Team
            </p>
            <h2 className="pm-display max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[0.95]">
              Hands on the work.
              <br />
              Names on the door.
            </h2>
            <p className="mt-5 max-w-lg text-[var(--pm-paper)]/70">
              The people who run the yard when the rest of the industry clocks
              out. Reach the house at info@vuyelalogistics.co.za.
            </p>
          </motion.div>

          <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {teamMembers.map((person, i) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: Math.min(i * 0.03, 0.35), duration: 0.5 }}
                className="text-center"
              >
                <div className="relative mx-auto mb-3 aspect-square w-full max-w-[140px] overflow-hidden bg-[var(--pm-night)]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="140px"
                  />
                </div>
                <p className="pm-display text-sm font-bold leading-tight md:text-base">
                  {person.name}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--pm-yellow)] md:text-[11px]">
                  {person.role}
                </p>
              </motion.li>
            ))}
          </ul>
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
              Visit the yard. Speak to the team who run it. This site
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
