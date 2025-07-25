import React from 'react';
import s from './ItemCard.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { ProductT } from '@/shared/types';
import { FeedbackPopup } from '../feedback-popup/FeedbackPopup';

export const ItemCard = ({ product }: { product: ProductT }) => {
  return (
    <div className={s.container}>
      <h2 className="h2">{product.name}</h2>
      <div className={s.content}>
        <div className={s.imageContainer}>
          <Image
            src={`${process.env.STORE_URL}/${product.photo_path}`}
            fill
            alt={product.name}
          />
        </div>
        <div className={s.info}>
          <div className={s.characteristic}>
            {product.specifications.map((specification) => (
              <p className="body-1" key={specification.id}>
                <strong>{specification.name}:</strong>{' '}
                {specification.pivot.value}
              </p>
            ))}
          </div>
          <div className={s.price}>
            <p className="h2">
              {product.price} ₽ / <span className="h4">m3</span>
            </p>
            <div>
              <Button
                variant="secondary"
                as="a"
                href={`/catalog/${product.slug}`}
              >
                подробнее
              </Button>
              <FeedbackPopup>
                <Button>заказать</Button>
              </FeedbackPopup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
