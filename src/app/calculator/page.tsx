import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import PageInfo from '@/features/PageInfo/PageInfo';

import calculator from '@/shared/assets/images/calculator.png';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import { CalculatorSection } from '@/widgets/CalculatorSection';

const page = async () => {
  return (
    <main>
      <PagesHero className={styles.hero} image={calculator}>
        <PageInfo
          isWide
          title={'Онлайн-калькулятор арболитовых блоков'}
          text="Точный расчёт коробки, внутренних перегородок и пример вычислений"
        />
      </PagesHero>

      <div className={styles.container}>
        <CalculatorSection />
        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас
        вопросы"
        />
      </div>
    </main>
  );
};

export default page;
