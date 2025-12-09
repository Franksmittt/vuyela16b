import { Metadata } from 'next';
import { IndustriesPageContent } from './IndustriesPageContent';

export const metadata: Metadata = {
  title: 'Industries We Serve | Vuyela Group',
  description:
    'Specialized logistics solutions for mining and agricultural sectors. From pit to port, we provide practical, real-world solutions for key industries.',
  openGraph: {
    title: 'Industries We Serve | Vuyela Group',
    description: 'Mining and agricultural logistics solutions across South Africa.',
  },
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}

