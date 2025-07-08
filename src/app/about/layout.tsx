import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('/about');

  return {
    title: seo?.title ?? 'О нас',
    description: seo?.description ?? 'О нас',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? seo?.title,
      description: seo?.og_description ?? seo?.description,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    },
  };
}

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
