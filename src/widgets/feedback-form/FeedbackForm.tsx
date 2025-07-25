'use client';
import React from 'react';
import s from './FeedbackForm.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { SocialMedia } from '@/entities/social-media';
import background from '@/shared/assets/images/feedback-background.svg';
import brickWall from '@/shared/assets/images/brick-wall.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { FeedbackFormScheme } from '@/shared/validation/feedback-scheme-creator';
import { ControlledTextField } from '@/shared/ui/controlled-textfiled';
import { ControlledTextArea } from '@/shared/ui/controlled-text-area';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { useForm } from 'react-hook-form';
import { createOrder } from '@/shared/api/createOrder';
import { SettingT } from '@/shared/types';
import { showToast } from '@/shared/ui/toast';
import Link from 'next/link';

declare global {
  interface Window {
    ym?: (id: number, type: string, name: string) => void;
  }
}

export const FeedbackForm = ({
  title,
  description,
  type = 'feedback',
  setting,
}: {
  title: string;
  description: string;
  type?: 'delivery' | 'feedback';
  setting: SettingT | null;
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      comment: '',
      isChecked: false,
      address: '',
      count: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(FeedbackFormScheme(type)),
  });

  const formHandler = handleSubmit(async (data) => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(102330396, 'reachGoal', 'form-oc');
    }

    const reqData = {
      name: data.name,
      phone: data.phone,
      comment:
        type === 'feedback'
          ? data.comment
          : `Пункт назначения: ${data.address}, Кол-во блоков: ${data.count}`,
    };

    try {
      await createOrder(reqData);
      reset();
      showToast({
        title: 'Ваша заявка получена!',
        message: 'Скоро наш менеджер свяжется с вами.',
        variant: 'success',
      });
    } catch (e) {
      showToast({
        title: 'Ваша заявка не получена...',
        message: 'Пожалуйста, повторите попытку ещё раз.',
        variant: 'error',
      });
      console.error(e);
    }
  });

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.title}>
          <h2 className="h2">{title}</h2>
          <p className="body-1">{description}</p>
        </div>
        <div className={s.form}>
          {type === 'delivery' && (
            <>
              <ControlledTextField
                placeholder="Пункт назначения"
                control={control}
                name="address"
              />
              <ControlledTextField
                placeholder="Количество блоков"
                control={control}
                name="count"
              />
            </>
          )}
          <ControlledTextField
            placeholder="Имя"
            control={control}
            name="name"
          />
          <ControlledTextField
            placeholder="Телефон"
            control={control}
            name="phone"
            type="tel"
          />
          {type === 'feedback' && (
            <ControlledTextArea
              placeholder="Комментарий"
              control={control}
              name="comment"
            />
          )}
          <ControlledCheckbox
            label="Согласие на обработку персональных данных"
            control={control}
            name="isChecked"
          />

          <Button onClick={formHandler}>Отправить</Button>
        </div>
      </div>
      <div className={s.imageContainer}>
        <Image src={background} fill alt="background" />
        <div className={s.brickWall}>
          <Image src={brickWall} fill alt="brick-wall" />
        </div>
        <div className={s.info}>
          <p className="body-2">У вас срочный вопрос?</p>
          <p className="body-1  ">
            Для оперативного ответа вы можете написать нам в мессенджеры
          </p>
          <div className={s.contacts}>
            <div className={s.phones}>
              {setting?.phones.map((phone, index) => {
                const cleanedPhone = phone.replace(/[^+\d]/g, '');
                return (
                  <Link href={`tel:${cleanedPhone}`} className="h4" key={index}>
                    {phone}
                  </Link>
                );
              })}
            </div>
            <Link href={`mailto:${setting?.email}`} className="h4">
              {setting?.email}
            </Link>
            <SocialMedia className={s.socialMedia} setting={setting} />
          </div>
        </div>
      </div>
    </div>
  );
};
