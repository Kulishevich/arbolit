'use client';
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './FeedbackPopup.module.scss';
import { TextField } from '@/shared/ui/text-field';
import { TextArea } from '@/shared/ui/text-area';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';

export const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      aria-label="Увеличенное изображение"
    >
      <Dialog.Overlay className={s.overlay}>
        <Dialog.Content className={s.content}>
          <div className={s.form}>
            <div>
              <h2 className="h2">связаться с нами</h2>
              <p className="body-2">
                Оставьте свои контактные данные и мы ответим на все интересующие
                вас вопросы
              </p>
            </div>
            <TextField placeholder="Имя" />
            <TextField placeholder="Телефон" />
            <TextArea placeholder="Комментарий" />
            <Checkbox label="Согласие на обработку персональных данных" />
            <Button>Отправить</Button>
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
