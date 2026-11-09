import type { Metadata } from 'next';
import PremiereClient from './PremiereClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Premiere | Vuyela Group',
  },
  description:
    'A showcase homepage for Vuyela Group — scroll-driven monument of the yard, the machine, and the team behind South African logistics.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/premiere',
  },
};

export default function PremierePage() {
  return <PremiereClient />;
}
