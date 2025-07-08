import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { NewT } from '@/shared/types';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug: newsSlug } = await params;

  const news: NewT = await fetch(
    `${process.env.API_URL}/news/${newsSlug.split('_')[1]}`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  const seo = await getSeoMetadata(`/news/${newsSlug}`);

  return {
    title: seo?.title ?? news.title,
    description: seo?.description ?? news.subtitle.substring(0, 140),
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? news.title,
      description: seo?.og_description ?? news.subtitle.substring(0, 140),
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${newsSlug}`,
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
