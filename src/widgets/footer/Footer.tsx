import React from 'react';
import s from './Footer.module.scss';
import { Logo } from '@/entities/logo';
import { navigation } from '@/shared/config/constants/navigation';
import { SocialMedia } from '@/entities/social-media';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { HeaderDropdown } from '@/shared/ui/header-dropdown';
import { ProductT } from '@/shared/types';

const aboutCompany = [
  {
    name: 'О нас',
    href: paths.about,
  },
  {
    name: 'Сертификаты',
    href: paths.certificate,
  },
];

export const Footer = ({ products }: { products: ProductT[] | null }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.logoContainer}>
          <Logo />
          <p className="body-4">
            Высокие стандарты качества в создании арболитовых блоков
          </p>
        </div>
        <div className={s.catalogAndNavigation}>
          <div className={s.catalog}>
            <p className="body-6">каталог</p>
            <div>
              {products?.map((product, index) => (
                <Link
                  href={`/catalog/${product.slug}_${product.id}`}
                  className="body-2"
                  key={index}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.navigation}>
            <p className="body-6">клиенту</p>
            <div>
              <Link className="body-2" href={navigation[0].path}>
                {navigation[0].title}
              </Link>
              <HeaderDropdown
                title="О компании"
                href={paths.about}
                items={aboutCompany}
                className="body-2"
              />
              {navigation.slice(1).map((elem, index) => (
                <Link className="body-2" href={elem.path} key={index}>
                  {elem.title}
                </Link>
              ))}
            </div>
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
        <Link className="body-5" href={paths.policy}>
          Политика обработки персональных данных
        </Link>
        <p className="body-5">
          Дизайн и разработка: <Link href="/">Cropas.by</Link>
        </p>
      </div>
    </div>
  );
};
