import { HouseIcon } from '@/shared/assets/icons';
import React from 'react';
import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={s.logo}>
      <HouseIcon />
      <div>
        <h5 className="h5">ООО "Домремонт"</h5>
        <p className="body-5">Арболитовые блоки</p>
      </div>
    </div>
  );
};
