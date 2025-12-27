import { Metadata } from 'next';
import PostsPageClient from './PostsPageClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog Posts | Vuyela Group',
  description:
    'Discover insightful articles, logistics news, and industry updates from Vuyela Group. Stay informed about warehousing, freight, bulk handling, and energy solutions.',
  alternates: {
    canonical: '/posts',
  },
  openGraph: {
    title: 'Blog Posts | Vuyela Group',
    description: 'Insights and updates on logistics, warehousing, and supply chain solutions.',
    url: 'https://vuyela.com/posts',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Vuyela Group Blog',
  description: 'Insights and updates on logistics, warehousing, and supply chain solutions.',
  url: 'https://vuyela.com/posts',
  publisher: {
    '@type': 'Organization',
    name: 'Vuyela Group',
  },
};

export default function PostsPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Latest Industry Insights</h1>
      <PostsPageClient />
    </>
  );
}
