import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './HeaderBurgerMenu.module.scss';
import { Button } from '@/shared/ui/button';
import { navigation } from '@/shared/config/constants/navigation';
import Link from 'next/link';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  BurgerMenuIcon,
  CloseIcon,
  LocationIcon,
  PhoneIcon,
} from '@/shared/assets/icons';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import { CollapseHeader } from '@/shared/ui/collapse-header';
import { paths } from '@/shared/config/constants/paths';

const categories = [
  'Мебель',
  'Фурнитура',
  'Декор для дома',
  'Ароматы для дома',
  'Мебель',
  'Фурнитура',
  'Декор для дома',
  'Ароматы для дома',
];

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

export const HeaderBurgerMenu = () => {
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
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild className={s.trigger}>
        <Button className={s.burgerButton}>
          {isOpen ? <CloseIcon /> : <BurgerMenuIcon />}
        </Button>
      </Dialog.Trigger>
      <VisuallyHidden>
        <Dialog.Title>Мобильное меню</Dialog.Title>
      </VisuallyHidden>
      <Dialog.Content className={s.content}>
        <div className={s.wrapper}>
          <div className={s.navigation}>
            <Link className="h2" href={navigation[0].path}>
              {navigation[0].title}
            </Link>
            <CollapseHeader title={'Каталог'}>
              {categories.map((category, index) => (
                <Link className="body-2" key={index} href={'/'}>
                  {category}
                </Link>
              ))}
            </CollapseHeader>
            <CollapseHeader title={'О компании'}>
              {aboutCompany.map((elem, index) => (
                <Link className="body-2" key={index} href={elem.href}>
                  {elem.name}
                </Link>
              ))}
            </CollapseHeader>
            {navigation.slice(1).map((nav, index) => (
              <Link className="h2" href={nav.path} key={index}>
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
      </Dialog.Content>
    </Dialog.Root>
  );
};
