import { Metadata } from 'next';
import { RefuelServiceContent } from './RefuelServiceContent';

export const metadata: Metadata = {
  title: 'Vuyela Refuel - Energy Solutions | Vuyela Group',
  description:
    'Premium 50ppm diesel supply with rigorous quality testing. Guaranteed pure fuel with our "Pregnancy Test" protocol.',
  openGraph: {
    title: 'Vuyela Refuel - Energy Solutions',
    description: 'Quality-assured diesel supply with comprehensive testing protocols.',
  },
};

export default function RefuelServicePage() {
  return <RefuelServiceContent />;
}

