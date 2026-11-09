import type { Metadata } from 'next';
import PremiereClient from './PremiereClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Premiere | Vuyela Group',
  },
  description:
    'Vuyela Group — corporate logistics homepage. Bulk, logistics, freight, and refuel from Elandsfontein, South Africa.',
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
