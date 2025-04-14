import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import about from '@/shared/assets/images/about.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import AboutBanner from '@/widgets/AboutBanner/AboutBanner';
import OurAdvantages from '@/widgets/OurAdwantages/OurAdwantages';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';

const page = async () => {
  return (
    <main>
      <PagesHero image={about} className={styles.hero}>
        <PageInfo
          title="О нас"
          text="Мы гордимся нашей историей и готовы поделиться ей с вами"
        />
      </PagesHero>
      <div className={styles.container}>
        <AboutBanner isBanner={false} />
        <OurAdvantages />

        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
