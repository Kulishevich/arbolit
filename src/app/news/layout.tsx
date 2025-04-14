import { getSeoMetadata } from '@/shared/api/getSeoMetadata';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug: newsSlug } = await params;

  const seo = await getSeoMetadata(`/news/${newsSlug}`);

  return {
    title: seo?.title ?? 'Арболит',
    description: seo?.description ?? 'Арболит',
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? 'Арболит',
      description: seo?.og_description ?? 'Арболит',
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
