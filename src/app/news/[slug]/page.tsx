import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import PageInfo from '@/features/PageInfo/PageInfo';
import clsx from 'clsx';
import { FeedbackForm } from '@/widgets/feedback-form';
import { parseDate } from '@/shared/lib/utils/parcsDate';
import Image from 'next/image';
import { ContentBlockT, NewT } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { ArrowLeftIcon } from '@/shared/assets/icons';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const news: NewT = await fetch(
    `${process.env.API_URL}/news/${params.slug.split('_')[1]}`
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

const page = async ({ params }: { params: { slug: string } }) => {
  const info: NewT = await fetch(
    `${process.env.API_URL}/news/${params.slug.split('_')[1]}`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <main>
      <PagesHero
        className={styles.hero}
        image={`${process.env.STORE_URL}/${info?.photo_path}`}
      >
        <PageInfo isWide title={info?.title} />
      </PagesHero>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={clsx('button-secondary', styles.date)}>
            {parseDate(info?.publication_date)}
          </div>
          {/*   <div className={clsx(styles.views)}>
            <EyeIcon />
            {info?.subtitle} просмотров
          </div> */}
        </div>

        <div className={styles.content}>
          <div className={clsx(styles.subtitle, 'body-1')}>
            {info?.subtitle}
          </div>
          {info?.content_blocks.map((elem: ContentBlockT, index: number) => {
            if (elem.type === 'text' && elem.content) {
              return (
                <div
                  key={index}
                  className={styles.textBlock}
                  dangerouslySetInnerHTML={{ __html: elem.content }}
                ></div>
              );
            }
            if (elem.type === 'image' && elem.images) {
              return (
                <div key={index} className={styles.imageBlock}>
                  {elem.images.map(
                    (image: { content: string }, idx: number) => (
                      <Image
                        key={idx}
                        src={`${process.env.STORE_URL}/${image.content}`}
                        alt=""
                        width={1920}
                        height={1080}
                      />
                    )
                  )}
                </div>
              );
            }
            return null;
          })}
          <Button variant="link" className={styles.backButton} href="/news">
            <ArrowLeftIcon />
            назад к новостям
          </Button>
        </div>

        <FeedbackForm />
      </div>
    </main>
  );
};

export default page;
