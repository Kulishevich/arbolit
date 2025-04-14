import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import PageInfo from '@/features/PageInfo/PageInfo';
import clsx from 'clsx';
import { parseDate } from '@/shared/lib/utils/parcsDate';
import Image from 'next/image';
import { ContentBlockT, NewT } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { ArrowLeftIcon } from '@/shared/assets/icons';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug: newsSlug } = await params;

  const info: NewT = await fetch(
    `${process.env.API_URL}/news/${newsSlug.split('_')[1]}`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <main>
      <PagesHero
        className={styles.hero}
        image={`${process.env.STORE_URL}/${info?.photo_path}`}
      >
        <PageInfo
          isWide
          title={info?.title}
          dynamicPath={{
            name: info.title,
            href: `/news/${info.title}_${info.id}`,
          }}
        />
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

        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
