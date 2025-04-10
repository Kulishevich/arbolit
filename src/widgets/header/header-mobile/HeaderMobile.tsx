import React from 'react';
import s from './HeaderMobile.module.scss';
import { Logo } from '@/entities/logo';
import { BurgerMenuIcon, PhoneIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';

export const HeaderMobile = () => {
  return (
    <div className={s.container}>
      <Logo />
      <div>
        <FeedbackPopup>
          <Button className={s.phoneButton}>
            <PhoneIcon />
          </Button>
        </FeedbackPopup>
        <Button className={s.burgerButton}>
          <BurgerMenuIcon />
        </Button>
      </div>
    </div>
  );
};
