import { HouseIcon } from '@/shared/assets/icons';
import React from 'react';
import s from './Logo.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

export const Logo = () => {
  return (
    <Link href={paths.home} className={s.logo}>
      <HouseIcon />
      <div>
        <h5 className="h5">ООО &quot;Домремонт&quot;</h5>
        <p className="body-5">Арболитовые блоки</p>
      </div>
    </Link>
  );
};
