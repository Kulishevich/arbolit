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

export const HeaderDesktop = ({
  products,
  setting,
  blockStatus,
}: {
  products: ProductT[] | null;
  setting: SettingT | null;
  blockStatus: StatusBlockT | null;
}) => {
  const catalogProducts =
    products?.map((elem) => ({
      name: elem.name,
      href: `/catalog/${elem.slug}`,
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
          <Link className="t-header" href={`${paths.calculator}`}>
            Калькулятор
          </Link>

          <HeaderDropdown
            href={paths.about}
            title="О компании"
            items={aboutCompany}
            className="t-header"
          />
          {blockStatus?.reviews_section_enabled && (
            <Link className="t-header" href={navigation[1].path}>
              {navigation[1].title}
            </Link>
          )}
          {blockStatus?.gallery_section_enabled && (
            <Link className="t-header" href={navigation[2].path}>
              {navigation[2].title}
            </Link>
          )}
          {blockStatus?.news_section_enabled && (
            <Link className="t-header" href={navigation[3].path}>
              {navigation[3].title}
            </Link>
          )}

          {navigation.slice(4).map((nav, index) => (
            <Link className="t-header" key={index} href={nav.path}>
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
