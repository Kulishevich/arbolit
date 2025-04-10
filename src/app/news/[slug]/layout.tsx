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

  return news
    ? {
        title: news.title,
        description: news.subtitle,
        keywords: news.title ?? '',
        openGraph: {
          title: news.title,
          description: news.subtitle,
        },
      }
    : {};
};

export default async function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
