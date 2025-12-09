// app/layout.tsx
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import MainFooter from '@/components/Footer';
import MainNavbar from '@/components/Navbar';
import { QueryProvider } from '@/providers/query';
import { ThemeProvider } from '@/providers/theme';
import '@/styles/globals.css';
import type { ChildrenProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Vuyela Group | Premier Logistics Solutions in South Africa',
  description:
    'Locally invested, globally connected. Vuyela Group delivers precision logistics, bulk handling, and energy solutions that keep South Africa moving 24/7, on time, every time.',
  keywords:
    'logistics, South Africa, warehousing, freight, bulk handling, transport, Elandsfontein, SOLAS certified, SARS bonded warehouse, mining logistics, agricultural logistics',
  authors: [{ name: 'Vuyela Group' }],
  creator: 'Vuyela Group',
  metadataBase: new URL('https://vuyela.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vuyela.com',
    title: 'Vuyela Group | Premier Logistics Solutions',
    description:
      'Premier logistics solutions from the heart of Elandsfontein. We deliver precision logistics, bulk handling, and energy solutions that keep South Africa moving 24/7.',
    siteName: 'Vuyela Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vuyela Group | Premier Logistics Solutions',
    description:
      'Locally invested, globally connected. Precision logistics solutions for South Africa.',
  },
};

function RootLayoutContent({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <div className="flex min-h-screen bg-(--background) w-full overflow-x-hidden">
              <div className="flex-1 flex flex-col w-full">
                <MainNavbar />
                <main className="flex-1 w-full overflow-x-hidden">
                  {children}
                </main>
                <MainFooter />
              </div>
            </div>
            <Toaster
              position="bottom-right"
              toastOptions={{
                className: 'bg-(--card) text-(--foreground) border-(--border)',
                duration: 3000,
              }}
            />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}
