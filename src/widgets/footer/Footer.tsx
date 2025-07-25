import React from 'react';
import s from './Footer.module.scss';
import { Logo } from '@/entities/logo';
import { navigation } from '@/shared/config/constants/navigation';
import { SocialMedia } from '@/entities/social-media';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { HeaderDropdown } from '@/shared/ui/header-dropdown';
import { ProductT, SettingT, StatusBlockT } from '@/shared/types';

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

export const Footer = ({
  products,
  setting,
  blockStatus,
}: {
  products: ProductT[] | null;
  setting: SettingT | null;
  blockStatus: StatusBlockT | null;
}) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.logoContainer}>
          <Logo logo={setting?.logo_path} />
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
                  href={`/catalog/${product.slug}`}
                  className="body-2"
                  key={index}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.navigation}>
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
              {blockStatus?.reviews_section_enabled && (
                <Link className="body-2" href={navigation[1].path}>
                  {navigation[1].title}
                </Link>
              )}
              {blockStatus?.gallery_section_enabled && (
                <Link className="body-2" href={navigation[2].path}>
                  {navigation[2].title}
                </Link>
              )}
              {blockStatus?.news_section_enabled && (
                <Link className="body-2" href={navigation[3].path}>
                  {navigation[3].title}
                </Link>
              )}
              {navigation.slice(4).map((elem, index) => (
                <Link className="body-2" href={elem.path} key={index}>
                  {elem.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={s.contacts}>
          <div className={s.phones}>
            {setting?.phones.map((phone, index) => {
              const cleanedPhone = phone.replace(/[^+\d]/g, '');
              return (
                <Link href={`tel:${cleanedPhone}`} className="h4" key={index}>
                  {phone}
                </Link>
              );
            })}
          </div>
          <Link href={`mailto:${setting?.email}`} className="h4">
            {setting?.email}
          </Link>
          <SocialMedia setting={setting} />
        </div>
      </div>
      <div className={s.info}>
        <p className="body-5">© 2025 domremont.com</p>
        <Link className="body-5" href={paths.policy}>
          Политика обработки персональных данных
        </Link>
        <p className="body-5">
          Дизайн и разработка: <Link href="https://cropas.by/">Cropas.by</Link>
        </p>
      </div>
    </div>
  );
};
