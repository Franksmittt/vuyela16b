import { Metadata } from 'next';
import DashboardPageClient from './DashboardPageClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Dashboard | Vuyela Group',
  description:
    'Access your Vuyela Group dashboard to manage your account, view logistics information, and track your shipments and services.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/dashboard',
  },
  openGraph: {
    title: 'Dashboard | Vuyela Group',
    description: 'Manage your account and logistics services with Vuyela Group.',
    url: 'https://vuyela.com/dashboard',
  },
};

const dashboardSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Vuyela Group Dashboard',
  description: 'Access your Vuyela Group dashboard to manage your account and logistics services.',
  url: 'https://vuyela.com/dashboard',
  applicationCategory: 'BusinessApplication',
  provider: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
};

export default function DashboardPage() {
  return (
    <>
      <JsonLd data={dashboardSchema} />
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>User Dashboard</h1>
      <DashboardPageClient />
    </>
  );
}
