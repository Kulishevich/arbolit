'use client';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightOutlinedIcon,
} from '@/shared/assets/icons';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { Pagination } from '@/shared/ui/pagination';
import { TextField } from '@/shared/ui/text-field';
import { FeedbackForm } from '@/widgets/feedback-form';
import { NewsCard } from '@/entities/news-card';
import s from './page.module.scss';
import { GalleryCard } from '@/entities/gallery-card';
import { CertificateCard } from '@/entities/certificate-card';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import { ItemCard } from '@/entities/item-card';

export default function Home() {
  return (
    <div className={s.container}>
      <ItemCard />
      <FeedbackPopup />
      <CertificateCard />
      <GalleryCard />
      <NewsCard />
      <FeedbackForm />
      <TextField placeholder="Имя" />
      <TextField placeholder="Имя" errorMessage="Неверно введены данные" />
      <Checkbox label="Согласие на обработку персональных данных" />
      <Checkbox disabled label="Согласие на обработку персональных данных" />
      <Pagination totalPages="5" />
      <Breadcrumbs />
      <Button variant="primary">заказать арболит</Button>
      <Button variant="callback">Обратный звонок</Button>
      <Button variant="primary_with_icon">
        Построить маршрут
        <ArrowRightOutlinedIcon />
      </Button>
      <Button variant="icon">
        <ArrowRightIcon />
      </Button>
      <Button variant="link">
        <ArrowLeftIcon />
        назад к новостям
      </Button>
      <Button variant="secondary">Подробнее</Button>
    </div>
  );
}
