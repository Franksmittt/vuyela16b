import { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | Vuyela Group',
  description:
    'Built on the road, defined by excellence. Learn about Vuyela Group\'s journey from a single truck to a new generation logistics company serving South Africa.',
  openGraph: {
    title: 'About Us | Vuyela Group',
    description: 'Our story of resilience, deliberate growth, and unwavering commitment to reliability.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
