import { Metadata } from 'next';
import { ServicesPageContent } from './ServicesPageContent';

export const metadata: Metadata = {
  title: 'Our Services | Vuyela Group',
  description:
    'Comprehensive logistics solutions across four specialized divisions: Vuyela Bulk, Logistics, Freight, and Refuel. Complete warehousing, transport, and energy services.',
  openGraph: {
    title: 'Our Services | Vuyela Group',
    description: 'Complete logistics solutions for warehousing, transport, freight, and energy needs.',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

