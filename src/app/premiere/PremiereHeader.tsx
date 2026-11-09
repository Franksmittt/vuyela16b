'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'facility', label: 'Facility' },
  { id: 'standards', label: 'Standards' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
] as const;

type PremiereHeaderProps = {
  onNavigate?: (id: string) => void;
};

export default function PremiereHeader({ onNavigate }: PremiereHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  return (
    <header
      className={`premiere-header fixed top-0 left-0 right-0 z-50 border-b transition-[background,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-[var(--pm-ink)]/12 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 pt-[3px] md:grid-cols-[1fr_auto_1fr] md:px-8">
        <Link
          href="#home"
          className="justify-self-start"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
        >
          <span className="pm-display text-[1.45rem] font-bold tracking-[0.02em] text-[var(--pm-ink)] md:text-[1.7rem]">
            Vuyela <span className="text-[var(--pm-yellow-deep)]">Group</span>
          </span>
        </Link>

        <nav
          className="hidden h-full items-stretch justify-center gap-0 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="rounded-none px-4 text-[1.05rem] font-semibold text-[var(--pm-ink)] transition-colors hover:bg-[var(--pm-ink)]/8 md:text-[1.125rem]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <Link
            href="/"
            className="text-[0.95rem] font-semibold text-[var(--pm-ink-soft)] hover:text-[var(--pm-ink)]"
          >
            Main site
          </Link>
          <button
            type="button"
            onClick={() => go('contact')}
            className="inline-flex items-center gap-2 bg-[var(--pm-yellow)] px-5 py-2.5 text-[0.95rem] font-bold text-[var(--pm-ink)] transition-transform hover:translate-y-[-1px]"
          >
            Contact us
            <span
              className="flex h-6 w-6 items-center justify-center bg-[var(--pm-ink)] text-[var(--pm-yellow)]"
              aria-hidden
            >
              →
            </span>
          </button>
        </div>

        <button
          type="button"
          className="justify-self-end lg:hidden"
          aria-expanded={open}
          aria-controls="premiere-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex h-11 w-11 items-center justify-center">
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
          </span>
        </button>
      </div>

      {open && (
        <div
          id="premiere-mobile-nav"
          className="border-t border-[var(--pm-ink)]/10 bg-white px-4 py-5 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="py-3.5 text-left text-xl font-semibold text-[var(--pm-ink)]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go('contact')}
              className="mt-3 bg-[var(--pm-yellow)] px-5 py-3 text-left text-base font-bold text-[var(--pm-ink)]"
            >
              Contact us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
