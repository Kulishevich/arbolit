'use client';
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

export default function Home() {
  return (
    <>
      <MainHero />
      <div className={s.container}>
        <AdvantagesBlock />
        <ArbolitCharacteristicsBlock />
        <AboutBanner />
        <OurAdvantages />
        <ArbolitCompound />
        <SliderWrapper title="сертификаты" variant="сertificate">
          {new Array(5).fill('').map((elem, index) => (
            <CertificateCard key={index} />
          ))}
        </SliderWrapper>
        <SliderWrapper title="последние новости" variant="news">
          {new Array(5).fill('').map((elem, index) => (
            <NewsCard key={index} />
          ))}
        </SliderWrapper>
        <ContactsBlock />
        <FeedbackForm />
      </div>
    </>
  );
}
