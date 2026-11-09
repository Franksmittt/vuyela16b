import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vuyelalogistics.co.za';

  // Block all crawlers in non-production environments
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  // Production: Allow crawling, but block sensitive routes
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/_next/', '/posts/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
