import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import about from '@/shared/assets/images/about.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import { FeedbackForm } from '@/widgets/feedback-form';
import AboutBanner from '@/widgets/AboutBanner/AboutBanner';
import OurAdvantages from '@/widgets/OurAdwantages/OurAdwantages';

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

        <FeedbackForm />
      </div>
    </main>
  );
};

export default page;
