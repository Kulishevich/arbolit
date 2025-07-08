import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('/delivery');

  return {
    title: seo?.title ?? 'Доставка',
    description: seo?.description ?? 'Доставка',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? seo?.title,
      description: seo?.og_description ?? seo?.description,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/delivery`,
    },
  };
}

export default async function DeliveryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
