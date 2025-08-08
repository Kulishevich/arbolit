import styles from './page.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Button } from '@/shared/ui/button';
import { ProductT } from '@/shared/types';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import SeoText from '@/widgets/SeoText/SeoText';
import { notFound } from 'next/navigation';
import { getSeoMetadata } from '@/shared/api/getSeoMetadata';

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug: catalogSlug } = await params;
  const product: ProductT = await fetch(
    `${process.env.API_URL}/products/slug/${catalogSlug}`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  const seo = await getSeoMetadata(`/catalog/${catalogSlug}`);

  if (!product) return notFound();

  const jsonLd = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    name: seo?.title ?? product.name,
    image: `${process.env.STORE_URL}/${product.photo_path}`,
    description: seo?.description ?? product.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: product.price,
      url: `https://domremont.com/catalog/${product.slug}`,
      availability: 'http://schema.org/InStock',
    },
  };

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Breadcrumbs
        dynamicPath={{
          name: product.name,
          href: `/catalog/${product.slug}`,
        }}
      />

      {product && (
        <>
          <section className={styles.product}>
            <Image
              src={`${process.env.STORE_URL}/${product.photo_path}`}
              alt={product.name}
              className={styles.image}
              width={538}
              height={538}
            />

            <div className={styles.info}>
              <h1 className={clsx(styles.title, 'h2')}>{product.name}</h1>
              <div className={styles.specifications}>
                {product.specifications.map((specification) => (
                  <div
                    className={clsx(styles.specificationsItem, 'body-1')}
                    key={specification.id}
                  >
                    <span className={styles.specificationsItemKey}>
                      {specification.name}:{' '}
                    </span>
                    {specification.pivot.value}
                  </div>
                ))}
              </div>

              <div className={clsx(styles.price, 'h2')}>
                {product.price} ₽. / <span>m3</span>
              </div>
              <FeedbackPopup>
                <Button className={styles.button}>Заказать</Button>
              </FeedbackPopup>
            </div>
          </section>
          <section className={styles.description}>
            <div className={styles.tabs}>
              <Button className={clsx(styles.tab, styles.active)}>
                Описание
              </Button>
              <Button className={styles.tab} as="a" href="/delivery">
                доставка
              </Button>
            </div>
            <div
              className={clsx(styles.content, 'body-2')}
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </section>
        </>
      )}

      <SeoText page={catalogSlug} />
      <FeedbackSection
        title="связаться с нами"
        description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
      />
    </main>
  );
};

export default page;
