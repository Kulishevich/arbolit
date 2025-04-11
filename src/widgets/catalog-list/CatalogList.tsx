'use client';
import { ItemCard } from '@/entities/item-card';
import React from 'react';
import s from './CatalogList.module.scss';
import { ProductT } from '@/shared/types';

export const CatalogList = ({ products }: { products: ProductT[] }) => {
  return (
    <div className={s.container}>
      {products.map((product, index) => (
        <ItemCard key={index} product={product} />
      ))}
    </div>
  );
};
