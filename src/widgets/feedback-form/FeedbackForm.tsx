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
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
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
    } catch (e) {
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

          <Button disabled={!isValid} onClick={formHandler}>
            Отправить
          </Button>
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
              {setting?.phones.map((phone, index) => (
                <p className="h4" key={index}>
                  {phone}
                </p>
              ))}
            </div>
            <p className="h4">{setting?.email}</p>
            <SocialMedia className={s.socialMedia} setting={setting} />
          </div>
        </div>
      </div>
    </div>
  );
};
