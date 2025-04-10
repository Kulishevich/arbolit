import PagesHero from '@/widgets/PagesHero/PagesHero';
import photoGallery from '../../../public/photo-gallery.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import s from './page.module.scss';
import { FeedbackForm } from '@/widgets/feedback-form';
import { PhotoGallery } from '@/widgets/photo-gallery';

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
        <PhotoGallery />
        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
