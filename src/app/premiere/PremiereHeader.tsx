'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  const chapterIds = ['arrive', ...navItems.map((n) => n.id)] as const;
  const activeId =
    chapterIds[Math.min(activeChapter, chapterIds.length - 1)] ?? 'arrive';

  return (
    <header
      className={`premiere-header fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'bg-[var(--pm-paper)]/95 shadow-[0_1px_0_rgba(28,26,23,0.12)] backdrop-blur-md'
          : 'bg-[var(--pm-paper)]/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 pt-[3px] md:h-[4.5rem] md:px-8">
        <Link
          href="#arrive"
          className="relative z-10 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            go('arrive');
          }}
        >
          <span className="pm-display text-[1.4rem] font-bold leading-none tracking-[0.03em] text-[var(--pm-ink)] md:text-[1.65rem]">
            Vuyela <span className="text-[var(--pm-yellow-deep)]">Group</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 xl:gap-2 lg:flex"
          aria-label="Premiere primary"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`pm-display rounded-sm px-3.5 py-2.5 text-[1.05rem] font-bold tracking-[0.06em] transition-colors md:text-[1.15rem] ${
                  isActive
                    ? 'bg-[var(--pm-ink)] text-[var(--pm-yellow)]'
                    : 'text-[var(--pm-ink)] hover:bg-[var(--pm-ink)]/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/"
            className="px-2 py-2 text-sm font-semibold text-[var(--pm-ink-soft)] underline-offset-4 hover:text-[var(--pm-ink)] hover:underline"
          >
            Main site
          </Link>
          <button
            type="button"
            onClick={() => go('close')}
            className="bg-[var(--pm-ink)] px-5 py-2.5 text-sm font-semibold tracking-[0.06em] text-[var(--pm-yellow)] transition-transform hover:translate-y-[-1px]"
          >
            Enter
          </button>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="premiere-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-[2px] bg-[var(--pm-ink)] transition-transform ${open ? 'translate-y-[8px] rotate-45' : ''}`}
            />
            <span
              className={`block h-[2px] bg-[var(--pm-ink)] transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-[2px] bg-[var(--pm-ink)] transition-transform ${open ? '-translate-y-[8px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="premiere-mobile-nav"
          className="border-t border-[var(--pm-ink)]/15 bg-[var(--pm-paper)] px-4 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Premiere mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="pm-display py-3.5 text-left text-xl font-semibold tracking-[0.06em] text-[var(--pm-ink)]"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/"
              className="mt-3 py-3 text-base font-semibold text-[var(--pm-ink-soft)]"
            >
              Main site
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
