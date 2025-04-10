import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import reviewsBg from '@/shared/assets/images/reviews.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import { FeedbackForm } from '@/widgets/feedback-form';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { ReviewCard } from '@/entities/review-card';
import { ReviewT } from '@/shared/types';
const page = async () => {
  const reviews: ReviewT[] | undefined = await fetch(
    `${process.env.API_URL}/reviews`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <main>
      <PagesHero image={reviewsBg} className={styles.hero}>
        <PageInfo
          title="отзывы"
          text="Мы гордимся своими проектами, и благодарим наших клиентов за отзывы о нашей работе"
        />
      </PagesHero>
      <div className={styles.container}>
        <SliderWrapper variant="reviews">
          {reviews &&
            reviews.map((elem) => (
              <ReviewCard
                key={elem.id}
                text={elem.description}
                name={elem.title}
                image={`${process.env.STORE_URL}/${elem.photo_path}`}
              />
            ))}
        </SliderWrapper>

        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
