import { Metadata } from 'next';
import { BulkServiceContent } from './BulkServiceContent';

export const metadata: Metadata = {
  title: 'Vuyela Bulk - Warehousing & Handling | Vuyela Group',
  description:
    'Strategic warehousing, stockpiling, and containerization at our Elandsfontein facility. SARS Bonded Warehouse with SOLAS certified weighbridges.',
  openGraph: {
    title: 'Vuyela Bulk - Warehousing & Handling',
    description: 'Professional warehousing and bulk handling solutions in Elandsfontein.',
  },
};

export default function BulkServicePage() {
  return <BulkServiceContent />;
}

