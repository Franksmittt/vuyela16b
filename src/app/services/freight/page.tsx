import { Metadata } from 'next';
import { FreightServiceContent } from './FreightServiceContent';

export const metadata: Metadata = {
  title: 'Vuyela Freight - Ocean Freight & Customs | Vuyela Group',
  description:
    'Complete freight forwarding and customs clearing. Strategic partnerships with major shipping lines for global trade facilitation.',
  openGraph: {
    title: 'Vuyela Freight - Ocean Freight & Customs',
    description: 'Professional ocean freight forwarding and customs clearing services.',
  },
};

export default function FreightServicePage() {
  return <FreightServiceContent />;
}

