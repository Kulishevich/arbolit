import React from 'react';
import s from './FeedbackForm.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { SocialMedia } from '@/entities/social-media';
import { TextArea } from '@/shared/ui/text-area';

export const FeedbackForm = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.title}>
          <h2 className="h2">связаться с нами</h2>
          <p className="body-1">
            Оставьте свои контактные данные и мы ответим на все интересующие вас
            вопросы
          </p>
        </div>
        <div className={s.form}>
          <TextField placeholder="Имя" />
          <TextField placeholder="Телефон" />
          <TextArea placeholder="Комментарий" />
          <Checkbox label="Согласие на обработку персональных данных" />
          <Button>Отправить</Button>
        </div>
      </div>
      <div className={s.imageContainer}>
        <Image src={'/background.svg'} fill alt="background" />
        <div className={s.info}>
          <p className="body-2">У вас срочный вопрос?</p>
          <p className="body-1  ">
            Для оперативного ответа вы можете написать нам в мессенджеры
          </p>
          <div className={s.contacts}>
            <div className={s.phones}>
              <p className="h4">+7 925 511-51-56</p>
              <p className="h4">+7 495 744 72 60</p>
            </div>
            <p className="h4">info@domremont.ru</p>
            <SocialMedia className={s.socialMedia} />
          </div>
        </div>
      </div>
    </div>
  );
};
