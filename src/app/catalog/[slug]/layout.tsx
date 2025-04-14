import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { ProductT } from '@/shared/types';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug: catalogSlug } = await params;
  const product: ProductT = await fetch(
    `${process.env.API_URL}/products/${catalogSlug.split('_')[1]}`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  const seo = await getSeoMetadata(`/catalog/${catalogSlug}`);

  return {
    title: seo?.title ?? product.name,
    description: seo?.description ?? product.description.substring(0, 140),
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.og_title ?? product.name,
      description: seo?.og_description ?? product.description.substring(0, 140),
    },
  };
};

export default async function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
