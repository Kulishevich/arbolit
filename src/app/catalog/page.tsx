import PagesHero from '@/widgets/PagesHero/PagesHero';
import certificates from '../../../public/certificates.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import { FeedbackForm } from '@/widgets/feedback-form';
import s from './page.module.scss';
import { CatalogList } from '@/widgets/catalog-list';

const page = async () => {
  return (
    <main>
      <PagesHero image={certificates}>
        <PageInfo
          title="каталог"
          text="Продукция нашей компании отличается от других высочайшим качеством по доступной цене"
        />
      </PagesHero>
      <div className={s.container}>
        <CatalogList />
        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
