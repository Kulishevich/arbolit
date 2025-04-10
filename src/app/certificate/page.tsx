import PagesHero from '@/widgets/PagesHero/PagesHero';
import certificates from '../../../public/certificates.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import { FeedbackForm } from '@/widgets/feedback-form';
import s from './page.module.scss';
import { CertificatesList } from '@/widgets/certificates-list';

const page = async () => {
  return (
    <main>
      <PagesHero image={certificates}>
        <PageInfo
          title="Сертификаты"
          text="Мы имеем все сертификаты, подтверждающие качество нашей продукции и нашу компетентность"
        />
      </PagesHero>
      <div className={s.container}>
        <CertificatesList />
        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
