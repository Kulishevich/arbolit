import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoMetadata('/contacts');

  return {
    title: seo?.title ?? 'Арболит',
    description: seo?.description ?? 'Арболит',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? seo?.title,
      description: seo?.og_description ?? seo?.description,
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
