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

  return product
    ? {
        title: product.name,
        description: product.description.substring(0, 140),
        keywords: product.name ?? '',
        openGraph: {
          title: product.name,
          description: product.description.substring(0, 140),
        },
      }
    : {};
};

export default async function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
