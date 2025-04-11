import AboutBanner from '@/widgets/AboutBanner/AboutBanner';
import s from './page.module.scss';
import ArbolitCharacteristicsBlock from '@/widgets/ArbolitCharacteristicsBlock/ArbolitCharacteristicsBlock';
import AdvantagesBlock from '@/widgets/AdvantagesBlock/AdvantagesBlock';
import ArbolitCompound from '@/widgets/ArbolitCompound/ArbolitCompound';
import { FeedbackForm } from '@/widgets/feedback-form';
import MainHero from '@/widgets/MainHero/MainHero';
import OurAdvantages from '@/widgets/OurAdwantages/OurAdwantages';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { CertificateCard } from '@/entities/certificate-card';
import { NewsCard } from '@/entities/news-card';
import ContactsBlock from '@/widgets/ContactsBlock/ContactsBlock';
import { ImageResponseT, NewT } from '@/shared/types';

export default async function Home() {
  const news: { current_page: number; data: NewT[] } = await fetch(
    `${process.env.API_URL}/news?page=1&per_page=6`
  )
    .then((res) => res.json())
    .catch(() => undefined);
  const certificates: ImageResponseT[] = await fetch(
    `${process.env.API_URL}/certificates`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <>
      <MainHero />
      <div className={s.container}>
        <AdvantagesBlock />
        <ArbolitCharacteristicsBlock />
        <AboutBanner />
        <OurAdvantages />
        <ArbolitCompound />
        <SliderWrapper title="сертификаты" variant="certificate">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </SliderWrapper>
        <SliderWrapper title="последние новости" variant="news">
          {news.data.map((item) => (
            <NewsCard key={item.id} {...item} isLow />
          ))}
        </SliderWrapper>
        <ContactsBlock />
        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас
            вопросы"
        />
      </div>
    </>
  );
}
