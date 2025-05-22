'use client';
import React, { useState } from 'react';
import s from './HeaderBurgerMenu.module.scss';
import { Button } from '@/shared/ui/button';
import { navigation } from '@/shared/config/constants/navigation';
import Link from 'next/link';
import {
  BurgerMenuIcon,
  CloseIcon,
  LocationIcon,
  PhoneIcon,
} from '@/shared/assets/icons';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import { CollapseHeader } from '@/shared/ui/collapse-header';
import { paths } from '@/shared/config/constants/paths';
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

export const HeaderBurgerMenu = ({
  products,
  setting,
  blockStatus,
}: {
  products: ProductT[] | null;
  setting: SettingT | null;
  blockStatus: StatusBlockT | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.container}>
      <Button
        className={s.burgerButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <BurgerMenuIcon />}
      </Button>
      {isOpen && (
        <div className={s.content}>
          <div className={s.navigation}>
            <Link
              className="h2"
              href={navigation[0].path}
              onClick={() => setIsOpen(false)}
            >
              {navigation[0].title}
            </Link>
            <CollapseHeader title={'Каталог'}>
              {products?.map((category, index) => (
                <Link
                  className="body-2"
                  key={index}
                  href={`/catalog/${category.slug}_${category.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </CollapseHeader>
            <CollapseHeader title={'О компании'}>
              {aboutCompany.map((elem, index) => (
                <Link
                  className="body-2"
                  key={index}
                  href={elem.href}
                  onClick={() => setIsOpen(false)}
                >
                  {elem.name}
                </Link>
              ))}
            </CollapseHeader>
            {blockStatus?.reviews_section_enabled && (
              <Link className="h2" href={navigation[1].path}>
                {navigation[1].title}
              </Link>
            )}
            {blockStatus?.gallery_section_enabled && (
              <Link className="h2" href={navigation[2].path}>
                {navigation[2].title}
              </Link>
            )}
            {blockStatus?.news_section_enabled && (
              <Link className="h2" href={navigation[3].path}>
                {navigation[3].title}
              </Link>
            )}
            {navigation.slice(4).map((nav, index) => (
              <Link
                className="h2"
                href={nav.path}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {nav.title}
              </Link>
            ))}
          </div>
          <div className={s.info}>
            <div>
              <LocationIcon />
              <p className="body-3">{setting?.address}</p>
            </div>
            <div>
              <PhoneIcon />
              <div className={s.phones}>
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
          </div>
          <FeedbackPopup>
            <Button variant="callback">Обратный звонок</Button>
          </FeedbackPopup>
        </div>
      )}
    </div>
  );
};
