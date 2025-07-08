import PagesHero from '@/widgets/PagesHero/PagesHero';
import certificates from '../../../public/certificates.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import s from './page.module.scss';
import { CatalogList } from '@/widgets/catalog-list';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import SeoText from '@/widgets/SeoText/SeoText';
import { getProducts } from '@/shared/api/getProducts';

const page = async () => {
  const products = await getProducts();

  return (
    <main>
      <PagesHero image={certificates}>
        <PageInfo
          title="каталог"
          text="Продукция нашей компании отличается от других высочайшим качеством по доступной цене"
        />
      </PagesHero>
      <div className={s.container}>
        <CatalogList products={products || []} />
        <SeoText page="catalog" />
        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
