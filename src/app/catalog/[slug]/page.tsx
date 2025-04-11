import styles from './page.module.scss';
import clsx from 'clsx';
import { FeedbackForm } from '@/widgets/feedback-form';
import Image from 'next/image';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Button } from '@/shared/ui/button';
import { ProductT } from '@/shared/types';

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug: catalogSlug } = await params;
  const product: ProductT = await fetch(
    `${process.env.API_URL}/products/${catalogSlug.split('_')[1]}`
  )
    .then((res) => res.json())
    .catch(() => undefined);
  console.log(product);
  return (
    <main className={styles.container}>
      <Breadcrumbs />

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
              <Button className={styles.button}>Заказать</Button>
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

      <FeedbackForm
        title="связаться с нами"
        description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
      />
    </main>
  );
};

export default page;
