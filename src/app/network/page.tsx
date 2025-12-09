import { Metadata } from 'next';
import { NetworkPageContent } from './NetworkPageContent';

export const metadata: Metadata = {
  title: 'The Vuyela Network | Vuyela Group',
  description:
    'Strategic partnerships and relationships that power our logistics network. Strong connections with TFR, shipping agents, road freight companies, and global partners.',
  openGraph: {
    title: 'The Vuyela Network | Vuyela Group',
    description: 'Our strategic partnerships and logistics network across South Africa and beyond.',
  },
};

export default function NetworkPage() {
  return <NetworkPageContent />;
}

