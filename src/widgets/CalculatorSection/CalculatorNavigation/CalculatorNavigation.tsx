'use client';
import React from 'react';
import clsx from 'clsx';
import s from './styles.module.scss';
import Image from 'next/image';

const navItems = [
  {
    number: '1',
    title: 'Расчёт коробки',
    image: '/calculator-nav-1.png',
    targetId: 'step-1',
  },
  {
    number: '2',
    title: 'Расчёт внутренних перегородок',
    image: '/calculator-nav-2.png',
    targetId: 'step-2',
  },
  {
    number: '3',
    title: 'пример расчёта',
    image: '/calculator-nav-3.png',
    targetId: 'step-3',
  },
];
export const CalculatorNavigation = () => {
  return (
    <div className={s.navigation}>
      {navItems.map((nav) => (
        <div
          key={nav.number}
          className={s.navItem}
          onClick={() => {
            const el = document.getElementById(nav.targetId);
            if (el) {
              const yOffset = -200; // отступ сверху
              const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          <p className={clsx(s.navItem__number, 'h5')}>{nav.number}</p>
          <p className={'h5'}>{nav.title}</p>
          <div className={s.navItem__image}>
            <Image src={nav.image} fill alt="nav-image" />
          </div>
        </div>
      ))}
    </div>
  );
};
