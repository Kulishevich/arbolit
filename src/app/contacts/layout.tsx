import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('/contacts');

  return {
    title: seo?.title ?? 'Контакты',
    description: seo?.description ?? 'Контакты',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? seo?.title,
      description: seo?.og_description ?? seo?.description,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contacts`,
    },
  };
}

export default async function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
