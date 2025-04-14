import React, { useEffect, useState } from 'react';
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

export const HeaderBurgerMenu = ({
  products,
}: {
  products: ProductT[] | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (isOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
    };
  }, [isOpen]);

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
              <Link href={paths.catalog} className="body-2">
                Каталог
              </Link>
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
            {navigation.slice(1).map((nav, index) => (
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
              <p className="body-3">г. Москва, ул. Ленина, 1</p>
            </div>
            <div>
              <PhoneIcon />
              <p className="body-3">
                +7 925 511-51-56 <br /> +7 495 744 72 60
              </p>
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
