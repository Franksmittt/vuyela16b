'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimatedVuyelaLogo from './AnimatedVuyelaLogo';

const navItems = [
  { id: 'yard', label: 'Yard' },
  { id: 'machine', label: 'Machine' },
  { id: 'proof', label: 'Proof' },
  { id: 'people', label: 'People' },
  { id: 'close', label: 'Contact' },
] as const;

type PremiereHeaderProps = {
  activeChapter?: number;
  onNavigate?: (id: string) => void;
};

export default function PremiereHeader({
  activeChapter = 0,
  onNavigate,
}: PremiereHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    if (onNavigate) onNavigate(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeId =
    activeChapter <= 0
      ? 'arrive'
      : activeChapter >= navItems.length
        ? navItems[navItems.length - 1].id
        : (['arrive', ...navItems.map((n) => n.id)][activeChapter] ?? 'arrive');

  return (
    <header
      className={`premiere-header fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'bg-[var(--pm-paper)]/92 shadow-[0_1px_0_rgba(28,26,23,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* progress rail sits above; pad for it */}
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 pt-[3px] md:px-8">
        <Link
          href="#arrive"
          className="relative z-10 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            go('arrive');
          }}
          aria-label="Vuyela Group — back to top"
        >
          <AnimatedVuyelaLogo size="nav" variant="light" priority />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Premiere primary"
        >
          {navItems.map((item) => {
            const isActive =
              activeId === item.id ||
              (item.id === 'yard' && activeId === 'arrive');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`pm-display text-[0.8rem] font-semibold tracking-[0.16em] transition-colors ${
                  isActive
                    ? 'text-[var(--pm-ink)]'
                    : 'text-[var(--pm-muted)] hover:text-[var(--pm-ink)]'
                }`}
              >
                {item.label}
                <span
                  className={`mt-1 block h-[2px] origin-left bg-[var(--pm-yellow-deep)] transition-transform duration-300 ${
                    activeId === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--pm-muted)] underline-offset-4 hover:text-[var(--pm-ink)] hover:underline"
          >
            Main site
          </Link>
          <button
            type="button"
            onClick={() => go('close')}
            className="bg-[var(--pm-ink)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
          >
            Enter
          </button>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="premiere-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-[1.5px] bg-[var(--pm-ink)] transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--pm-ink)] transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--pm-ink)] transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="premiere-mobile-nav"
          className="border-t border-[var(--pm-ink)]/10 bg-[var(--pm-paper)] px-4 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Premiere mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="pm-display py-3 text-left text-lg font-semibold tracking-[0.12em] text-[var(--pm-ink)]"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/"
              className="mt-4 py-3 text-sm uppercase tracking-[0.14em] text-[var(--pm-muted)]"
            >
              Main site
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
