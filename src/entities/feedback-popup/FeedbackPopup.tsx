'use client';
import React, { ReactNode, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ControlledTextField } from '@/shared/ui/controlled-textfiled';
import { ControlledTextArea } from '@/shared/ui/controlled-text-area';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { createOrder } from '@/shared/api/createOrder';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './FeedbackPopup.module.scss';
import { FeedbackFormScheme } from '../../shared/validation/feedback-scheme-creator';
import { showToast } from '@/shared/ui/toast';

export const FeedbackPopup = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      comment: '',
      isChecked: false,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(FeedbackFormScheme('feedback')),
  });

  const formHandler = handleSubmit(async (data) => {
    const { isChecked, ...dataWithoutChecked } = data;
    try {
      await createOrder(dataWithoutChecked);
      reset();
      showToast({ title: 'Запрос отправлен', variant: 'success' });
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      aria-label="Увеличенное изображение"
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Overlay className={s.overlay}>
        <VisuallyHidden>
          <Dialog.Title>Форма обратной связи</Dialog.Title>
        </VisuallyHidden>
        <Dialog.Content className={s.content}>
          <div className={s.form}>
            <div>
              <h2 className="h2">связаться с нами</h2>
              <p className="body-2">
                Оставьте свои контактные данные и мы ответим на все интересующие
                вас вопросы
              </p>
            </div>
            <ControlledTextField
              placeholder="Имя"
              name="name"
              control={control}
            />
            <ControlledTextField
              placeholder="Телефон"
              name="phone"
              control={control}
            />
            <ControlledTextArea
              placeholder="Комментарий"
              name="comment"
              control={control}
            />
            <ControlledCheckbox
              control={control}
              label="Согласие на обработку персональных данных"
              name="isChecked"
            />
            <Button onClick={formHandler}>Отправить</Button>
          </div>
          <Image
            src="/brick-wall.svg"
            width={456}
            height={456}
            alt="brick-wall"
            className={s.brickWall}
          />
          <Image
            src="/feedback-image.png"
            width={563}
            height={462}
            alt="feedback"
            className={s.image}
          />
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Root>
  );
};
