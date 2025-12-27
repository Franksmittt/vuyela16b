import { Metadata } from 'next';
import DashboardSettingsPageClient from './DashboardSettingsPageClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Settings | Dashboard | Vuyela Group',
  description:
    'Manage your Vuyela Group account settings, preferences, notifications, privacy, and security options from your dashboard.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/dashboard/settings',
  },
  openGraph: {
    title: 'Settings | Dashboard | Vuyela Group',
    description: 'Manage your account settings and preferences with Vuyela Group.',
    url: 'https://vuyela.com/dashboard/settings',
  },
};

const settingsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Settings | Dashboard | Vuyela Group',
  description: 'Manage your account settings and preferences with Vuyela Group.',
  url: 'https://vuyela.com/dashboard/settings',
  isPartOf: {
    '@type': 'WebApplication',
    name: 'Vuyela Group Dashboard',
    url: 'https://vuyela.com/dashboard',
  },
};

export default function DashboardSettingsPage() {
  return (
    <>
      <JsonLd data={settingsSchema} />
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Dashboard Settings</h1>
      <DashboardSettingsPageClient />
    </>
  );
}
