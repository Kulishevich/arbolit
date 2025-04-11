import PagesHero from '@/widgets/PagesHero/PagesHero';
import certificatesBg from '../../../public/certificates.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import { FeedbackForm } from '@/widgets/feedback-form';
import s from './page.module.scss';
import { CertificatesList } from '@/widgets/certificates-list';
import { Suspense } from 'react';

const page = async () => {
  return (
    <main>
      <PagesHero image={certificatesBg}>
        <PageInfo
          title="Сертификаты"
          text="Мы имеем все сертификаты, подтверждающие качество нашей продукции и нашу компетентность"
        />
      </PagesHero>
      <div className={s.container}>
        <Suspense fallback={<h3 className="h3">Загрузка сертификатов...</h3>}>
          <CertificatesList />
        </Suspense>
        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
