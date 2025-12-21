import { FacilitiesPageContent } from './FacilitiesPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities | Vuyela Group',
  description:
    'State-of-the-art facilities in Elandsfontein. SOLAS certified weighbridges, SARS bonded warehouse, full CCTV coverage, and 24/7 operations.',
  keywords:
    'logistics facilities, SOLAS certified, SARS bonded warehouse, weighbridges, CCTV coverage, Elandsfontein, warehousing, containerization, South Africa logistics',
};

export default function FacilitiesPage() {
  return <FacilitiesPageContent />;
}

