import { Metadata } from 'next';
import { ContactPageContent } from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us | Vuyela Group',
  description:
    'Get in touch with Vuyela Group for your logistics needs. Contact us for warehousing, freight, bulk handling, and energy solutions in South Africa.',
  openGraph: {
    title: 'Contact Us | Vuyela Group',
    description: 'Reach out to discuss your logistics requirements with our expert team.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

