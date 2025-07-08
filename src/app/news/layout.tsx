import { getSeoMetadata } from '@/shared/api/getSeoMetadata';

export const generateMetadata = async () => {
  const seo = await getSeoMetadata(`/news`);

  return {
    title: seo?.title ?? 'Новости',
    description: seo?.description ?? 'Новости',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Новости',
      description: seo?.og_description ?? 'Новости',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/news`,
    },
  };
};

export default async function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
