import { Metadata } from 'next';
import { LogisticsServiceContent } from './LogisticsServiceContent';

export const metadata: Metadata = {
  title: 'Vuyela Logistics | Road Freight & Transport',
  description:
    'Own fleet operations with 24/7 monitoring. Container logistics, intermodal solutions, and reliable transport across South Africa.',
  openGraph: {
    title: 'Vuyela Logistics - Road Freight & Transport',
    description: 'Professional road freight and transport solutions with own fleet operations.',
  },
};

export default function LogisticsServicePage() {
  return <LogisticsServiceContent />;
}

