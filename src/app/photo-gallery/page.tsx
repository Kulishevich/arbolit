import PagesHero from '@/widgets/PagesHero/PagesHero';
import photoGallery from '../../../public/photo-gallery.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import s from './page.module.scss';
import { PhotoGallery } from '@/widgets/photo-gallery';
import { Suspense } from 'react';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import SeoText from '@/widgets/SeoText/SeoText';

const page = async () => {
  return (
    <main>
      <PagesHero image={photoGallery}>
        <PageInfo
          title="Фотогалерея"
          text="Мы гордимся нашими проектами, поэтому представляем нашу фотогалерею готовых работ"
        />
      </PagesHero>
      <div className={s.container}>
        <Suspense fallback={<h3 className="h3">Загрузка галереи...</h3>}>
          <PhotoGallery />
        </Suspense>
        <SeoText page="photo-gallery" />
        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
