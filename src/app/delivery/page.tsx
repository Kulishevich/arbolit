import PagesHero from '@/widgets/PagesHero/PagesHero';
import delivery from '../../../public/delivery-bg.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import s from './page.module.scss';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import SeoText from '@/widgets/SeoText/SeoText';
const page = async () => {
  return (
    <main>
      <PagesHero image={delivery}>
        <PageInfo
          title="Доставка"
          text="Доставляем арболитовые блоки по всей Московской области, а также в другие регионы"
        />
      </PagesHero>
      <div className={s.container}>
        <SeoText page="delivery" />
        <FeedbackSection
          type="delivery"
          title="Расчёт стоимости доставки"
          description="Заполните форму для расчёта итоговой стоимости транспортировки арболита от производства до вашего места строительства"
        />
      </div>
    </main>
  );
};

export default page;
