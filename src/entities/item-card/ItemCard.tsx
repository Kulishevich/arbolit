import React from 'react';
import s from './ItemCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { showToast } from '@/shared/ui/toast';

export const ItemCard = () => {
  return (
    <div className={s.container}>
      <h2 className="h2">Стеновой арболитовый блок</h2>
      <div className={s.content}>
        <div className={s.imageContainer}>
          <Image src={'/item.png'} fill alt="item" />
        </div>
        <div className={s.info}>
          <div className={s.characteristic}>
            <p className="body-1">
              <strong>Состав:</strong> 90% щепа хвойных пород, цемент марки
              ПЦ-500 Д0 и минерализатор.
            </p>
            <p className="body-1">
              <strong>Погрешность геометрии:</strong> — не более 5 мм.
            </p>
            <p className="body-1">
              <strong>Размер блока:</strong> — 500 x 300 x 200 миллиметров
            </p>
            <p className="body-1">
              <strong>Применение:</strong> Применяется для сооружения несущих
              стен и конструкции в высоту до 12 метров с использованием ЖБ плит
              для перекрытий.
            </p>
          </div>
          <div className={s.price}>
            <p className="h2">
              9000 ₽ / <span className="h4">m3</span>
            </p>
            <div>
              <Button variant="secondary" as="a" href="/catalog/test_1">
                подробнее
              </Button>
              <Button
                onClick={() =>
                  showToast({
                    title: 'Ваша заявка получена!',
                    variant: 'success',
                    message: 'Скоро наш менеджер свяжется с вами.',
                  })
                }
              >
                заказать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
