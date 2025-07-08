import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('/policy');

  return {
    title: seo?.title ?? 'Политика конфиденциальности',
    description: seo?.description ?? 'Политика конфиденциальности',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? seo?.title,
      description: seo?.og_description ?? seo?.description,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/policy`,
    },
  };
}

export default async function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
