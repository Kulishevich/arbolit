import React from 'react';
import s from './Header.module.scss';
import { navigation } from '@/shared/config/constants/navigation';
import { Logo } from '@/entities/logo';
import { LocationIcon, PhoneIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <Logo />
        <div className={s.address}>
          <LocationIcon />
          <p className="body-4">
            105005, г. Москва, Бакунинская ул., д. 10-12 стр. 4.
          </p>
        </div>
        <div className={s.phones}>
          <PhoneIcon />
          <div>
            <p className="body-3">+7 925 511-51-56</p>
            <p className="body-3">+7 495 744 72 60</p>
          </div>
        </div>
        <Button variant="callback">Обратный звонок</Button>
      </div>
      <div className={s.line}></div>
      <div className={s.navigation}>
        <Link className="t-header" href={navigation[0].path}>
          {navigation[0].title}
        </Link>
        <Link className="t-header" href={navigation[0].path}>
          Каталог
        </Link>{' '}
        <Link className="t-header" href={navigation[0].path}>
          О компании
        </Link>
        {navigation.slice(1).map((nav, index) => (
          <Link className="t-header" key={index} href={nav.path}>
            {nav.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
