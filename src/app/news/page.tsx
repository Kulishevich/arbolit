import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import PageInfo from '@/features/PageInfo/PageInfo';
import newsBg from '@/shared/assets/images/news.png';
import { NewT } from '@/shared/types';
import NewsTags from '@/features/NewsTags/NewsTags';
import { NewsCard } from '@/entities/news-card';
import { Pagination } from '@/shared/ui/pagination';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import SeoText from '@/widgets/SeoText/SeoText';
import { getBlockStatus } from '@/shared/api/getBlockStatus';
import { redirect } from 'next/navigation';
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string; tag: string }>;
}) => {
  const pageNumber = (await searchParams).page ?? '1';
  const tag = (await searchParams).tag ?? '';
  const news: { current_page: number; total: number; data: NewT[] } =
    await fetch(
      `${process.env.API_URL}/news?page=${pageNumber}&per_page=6${
        tag ? `&tag=${tag}` : ''
      }`
    )
      .then((res) => res.json())
      .catch(() => undefined);
  const allNews: NewT[] = await fetch(`${process.env.API_URL}/news/all`)
    .then((res) => res.json())
    .catch(() => undefined);

  const blockStatus = await getBlockStatus();

  if (!blockStatus?.news_section_enabled) {
    redirect('/');
  }

  return (
    <main>
      <PagesHero className={styles.hero} image={newsBg}>
        <PageInfo
          title="Новости"
          text="Здесь мы пишем о последних новостях компании и об инновациях в сфере строительства из арболита"
        />
      </PagesHero>
      <div className={styles.container}>
        <NewsTags
          tags={allNews.reduce((acc, curr) => {
            if (curr.tags) {
              return [...acc, ...curr.tags];
            }
            return acc;
          }, [] as string[])}
        />
        <div className={styles.news}>
          <div>
            {news.data
              .filter((item) =>
                tag.length > 0 ? item.tags.includes(tag) : true
              )
              .filter((_, index) => [0, 3, 4].includes(index))
              .map((item, index) => (
                <NewsCard key={item.id} {...item} isLow={index !== 0} />
              ))}
          </div>
          <div>
            {news.data
              .filter((item) =>
                tag.length > 0 ? item.tags.includes(tag) : true
              )
              .filter((_, index) => [1, 2, 5].includes(index))
              .map((item, index) => (
                <NewsCard key={item.id} {...item} isLow={index !== 2} />
              ))}
          </div>
        </div>
        <Pagination
          className={styles.pagination}
          currentPage={pageNumber}
          totalPages={Math.ceil(news.total / 6).toString()}
        />
        <SeoText page="news" />
        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
