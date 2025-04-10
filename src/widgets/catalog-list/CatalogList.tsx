'use client';
import { ItemCard } from '@/entities/item-card';
import React from 'react';
import s from './CatalogList.module.scss';

const items = new Array(4).fill('');

export const CatalogList = () => {
  return (
    <div className={s.container}>
      {items.map((elem, index) => (
        <ItemCard key={index} />
      ))}
    </div>
  );
};
