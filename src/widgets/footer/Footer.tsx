import React from 'react';
import s from './Footer.module.scss';
import { Logo } from '@/entities/logo';
import { navigation } from '@/shared/config/constants/navigation';
import { SocialMedia } from '@/entities/social-media';
import Link from 'next/link';

const catalog = [
  'Арболитовый блок стандартный конструкционный',
  'Арболитовый блок теплоизоляционный',
  'Блок под армопояс',
  'Арболитовый блок перегородочный',
  'Блок с односторонним отделочным слоем',
];

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.logoContainer}>
          <Logo />
          <p className="body-4">
            Высокие стандарты качества в создании арболитовых блоков
          </p>
        </div>
        <div className={s.catalog}>
          <p className="body-6">каталог</p>
          <div>
            {catalog.map((category, index) => (
              <Link href="/" className="body-2" key={index}>
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div className={s.navigation}>
          <p className="body-6">клиенту</p>
          <div>
            {navigation.map((elem, index) => (
              <Link className="body-2" href={elem.path} key={index}>
                {elem.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={s.contacts}>
          <div className={s.phones}>
            <p className="h4">+7 925 511-51-56</p>
            <p className="h4">+7 495 744 72 60</p>
          </div>
          <p className="h4">info@domremont.ru</p>
          <SocialMedia />
        </div>
      </div>
      <div className={s.info}>
        <p className="body-5">© 2025 domremont.com</p>
        <p className="body-5">Политика обработки персональных данных</p>
        <p className="body-5">
          Дизайн и разработка: <Link href="/">Cropas.by</Link>
        </p>
      </div>
    </div>
  );
};
