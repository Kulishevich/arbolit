import AboutBanner from '@/widgets/AboutBanner/AboutBanner';
import s from './page.module.scss';
import ArbolitCharacteristicsBlock from '@/widgets/ArbolitCharacteristicsBlock/ArbolitCharacteristicsBlock';
import AdvantagesBlock from '@/widgets/AdvantagesBlock/AdvantagesBlock';
import ArbolitCompound from '@/widgets/ArbolitCompound/ArbolitCompound';
import MainHero from '@/widgets/MainHero/MainHero';
import OurAdvantages from '@/widgets/OurAdwantages/OurAdwantages';
import { SliderWrapper } from '@/entities/slider-wrapper';
import { CertificateCard } from '@/entities/certificate-card';
import { NewsCard } from '@/entities/news-card';
import ContactsBlock from '@/widgets/ContactsBlock/ContactsBlock';
import { ImageResponseT, NewT } from '@/shared/types';
import { getSetting } from '@/shared/api/getSetting';
import FeedbackSection from '@/widgets/feedback-section/FeedbackSection';
import SeoText from '@/widgets/SeoText/SeoText';
import { getBlockStatus } from '@/shared/api/getBlockStatus';
import { getMaterialAdvantages } from '@/shared/api/getMaterialAdvantages';

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

  const setting = await getSetting();
  const blockStatus = await getBlockStatus();
  const advantages = await getMaterialAdvantages();

  return (
    <>
      <MainHero />
      <div className={s.container}>
        <AdvantagesBlock advantages={advantages} />
        <ArbolitCharacteristicsBlock />
        <AboutBanner />
        <OurAdvantages />
        <ArbolitCompound />
        {!!certificates?.length && (
          <SliderWrapper title="сертификаты" variant="certificate">
            {certificates?.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </SliderWrapper>
        )}
        {blockStatus?.news_section_enabled && (
          <SliderWrapper title="последние новости" variant="news">
            {news.data.map((item) => (
              <NewsCard key={item.id} {...item} isLow />
            ))}
          </SliderWrapper>
        )}
        <ContactsBlock setting={setting} />
        <SeoText page="main" />
        <FeedbackSection
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас
            вопросы"
        />
      </div>
    </>
  );
}
