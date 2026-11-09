'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import PremiereHeader from './PremiereHeader';

const services = [
  {
    name: 'Vuyela Bulk',
    line: 'Warehousing & handling',
    copy: 'Bonded storage, stockpiling, and containerization from the Elandsfontein yard.',
    image: '/images/machine/bulk.webp',
    href: '/services/bulk',
  },
  {
    name: 'Vuyela Logistics',
    line: 'Road freight & transport',
    copy: 'Own fleet. Own standards. Live tracking from gate-out to gate-in.',
    image: '/images/machine/logistics.webp',
    href: '/services/logistics',
  },
  {
    name: 'Vuyela Freight',
    line: 'Ocean freight & customs',
    copy: 'Port to inland, cleared and sequenced when the clock is tight.',
    image: '/images/machine/freight.webp',
    href: '/services/freight',
  },
  {
    name: 'Vuyela Refuel',
    line: 'Energy solutions',
    copy: '50ppm diesel with a quality protocol that refuses shortcuts.',
    image: '/images/machine/refuel.webp',
    href: '/services/refuel',
  },
];

const standards = [
  { label: 'Operations', value: '24/7' },
  { label: 'Weighbridges', value: 'SOLAS' },
  { label: 'Warehouse', value: 'SARS Bonded' },
  { label: 'Safety', value: 'NOSA' },
  { label: 'Fleet', value: 'Owned' },
  { label: 'Yard', value: 'Camera Covered' },
];

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
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroFade = useTransform(heroProgress, [0, 0.75], [1, 0]);
  const heroLift = useTransform(heroProgress, [0, 1], [0, -40]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="premiere-root relative">
      <PremiereHeader onNavigate={scrollTo} />

      {/* HERO — kept */}
      <section
        id="home"
        ref={heroRef}
        className="pm-hero-hang relative overflow-hidden bg-white"
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
              onClick={() => scrollTo('services')}
              className="inline-flex items-center gap-3 bg-[var(--pm-ink)] px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
            >
              Our services
              <span
                className="flex h-7 w-7 items-center justify-center bg-[var(--pm-yellow)] text-[var(--pm-ink)]"
                aria-hidden
              >
                ↓
              </span>
            </button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-[var(--pm-ink-soft)] underline-offset-4 hover:text-[var(--pm-ink)] hover:underline"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES — four divisions, corporate grid */}
      <section id="services" className="bg-[var(--pm-paper)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              Services
            </p>
            <h2 className="pm-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              Four divisions.
              <span className="text-[var(--pm-yellow-deep)]"> One group.</span>
            </h2>
            <p className="mt-5 text-[var(--pm-ink-soft)]">
              Bulk, logistics, freight, and refuel — under one roof at Main Reef
              Road, serving shippers across South Africa and beyond.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.article
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <Link href={s.href} className="group block">
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[var(--pm-paper-deep)]">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--pm-yellow-deep)]">
                    {s.line}
                  </p>
                  <h3 className="pm-display mt-2 text-xl font-bold text-[var(--pm-ink)] md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--pm-ink-soft)]">
                    {s.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--pm-ink)] underline-offset-4 group-hover:underline">
                    Open division
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY — one strong yard plate + copy */}
      <section
        id="facility"
        className="bg-[var(--pm-night)] text-[var(--pm-paper)]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src="/images/yard/aerial.webp"
              alt="Aerial view of the Elandsfontein yard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
              Facility
            </p>
            <h2 className="pm-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[0.95]">
              Built where the cargo lives.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--pm-paper)]/75 md:text-lg">
              83 Main Reef Road, Elandsfontein — containers, bulk stockpiles,
              yellow fleet, and reach stackers on the same dirt. Own yard. Own
              weighbridges. Camera covered, 24/7.
            </p>
            <Link
              href="/facilities"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--pm-yellow)] underline-offset-4 hover:underline"
            >
              View facilities
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section id="standards" className="bg-[var(--pm-paper)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              Standards
            </p>
            <h2 className="pm-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              Quiet facts.
              <span className="text-[var(--pm-yellow-deep)]">
                {' '}
                Loud standards.
              </span>
            </h2>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-px bg-[var(--pm-steel)] md:grid-cols-3">
            {standards.map((s) => (
              <li
                key={s.label}
                className="bg-[var(--pm-paper)] px-6 py-10 md:px-8"
              >
                <p className="pm-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[var(--pm-ink)]">
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--pm-muted)]">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>

          <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden bg-[var(--pm-paper-deep)]">
            <Image
              src="/images/weighbridge-solas.png"
              alt="SOLAS certified weighbridge"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="bg-[var(--pm-night-soft)] py-20 text-[var(--pm-paper)] md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-yellow)]">
                Team
              </p>
              <h2 className="pm-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[0.95]">
                Hands on the work.
              </h2>
              <p className="mt-4 text-[var(--pm-paper)]/70">
                The people who run the yard. Reach the house at{' '}
                <a
                  href="mailto:info@vuyelalogistics.co.za"
                  className="text-[var(--pm-yellow)] hover:underline"
                >
                  info@vuyelalogistics.co.za
                </a>
                .
              </p>
            </div>
            <Link
              href="/about"
              className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--pm-yellow)] underline-offset-4 hover:underline"
            >
              About the group →
            </Link>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {teamMembers.map((person) => (
              <li key={person.name} className="text-center">
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background:
            'linear-gradient(165deg, var(--pm-paper) 0%, var(--pm-yard) 100%)',
        }}
      >
        <div className="pm-grain" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--pm-muted)]">
              Contact
            </p>
            <h2 className="pm-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[0.95] text-[var(--pm-ink)]">
              The gate is open.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-[var(--pm-ink-soft)]">
              Visit the yard. Speak to the team. We respond through one house
              email — no personal inboxes on this site.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[var(--pm-ink)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
              >
                Contact form
              </Link>
              <a
                href="mailto:info@vuyelalogistics.co.za"
                className="border border-[var(--pm-ink)]/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pm-ink)] transition-colors hover:border-[var(--pm-ink)]"
              >
                Email info@
              </a>
            </div>
            <address className="mt-12 not-italic text-sm leading-relaxed text-[var(--pm-muted)]">
              83 Main Reef Road, Elandsfontein, Gauteng, 1601
              <br />
              <a
                href="mailto:info@vuyelalogistics.co.za"
                className="text-[var(--pm-ink-soft)] hover:text-[var(--pm-ink)]"
              >
                info@vuyelalogistics.co.za
              </a>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
}
