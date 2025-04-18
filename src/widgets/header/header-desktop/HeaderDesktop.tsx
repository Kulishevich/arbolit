import React from 'react';
import s from './HeaderDesktop.module.scss';
import { navigation } from '@/shared/config/constants/navigation';
import { Logo } from '@/entities/logo';
import { LocationIcon, PhoneIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import { paths } from '@/shared/config/constants/paths';
import { HeaderDropdown } from '@/shared/ui/header-dropdown';
import { ProductT, SettingT } from '@/shared/types';

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

export const HeaderDesktop = ({
  products,
  setting,
}: {
  products: ProductT[] | null;
  setting: SettingT | null;
}) => {
  const catalogProducts =
    products?.map((elem) => ({
      name: elem.name,
      href: `/catalog/${elem.slug}_${elem.id}`,
    })) || [];

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.info}>
          <Logo logo={setting?.logo_path} />
          <div className={s.address}>
            <LocationIcon />
            <p className="body-4">{setting?.address}</p>
          </div>
          <div className={s.phones}>
            <PhoneIcon />
            <div>
              {setting?.phones.map((phone, index) => {
                const cleanedPhone = phone.replace(/[^+\d]/g, '');
                return (
                  <Link
                    href={`tel:${cleanedPhone}`}
                    className="body-3"
                    key={index}
                  >
                    {phone}
                  </Link>
                );
              })}
            </div>
          </div>
          <FeedbackPopup>
            <Button variant="callback">Обратный звонок</Button>
          </FeedbackPopup>
        </div>
        <div className={s.line}></div>
        <div className={s.navigation}>
          <Link className="t-header" href={navigation[0].path}>
            {navigation[0].title}
          </Link>
          <HeaderDropdown
            title="Каталог"
            href={paths.catalog}
            items={catalogProducts}
            className="t-header"
          />
          <HeaderDropdown
            href={paths.about}
            title="О компании"
            items={aboutCompany}
            className="t-header"
          />
          {navigation.slice(1).map((nav, index) => (
            <Link className="t-header" key={index} href={nav.path}>
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
