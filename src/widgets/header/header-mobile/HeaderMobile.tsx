import React from 'react';
import s from './HeaderMobile.module.scss';
import { Logo } from '@/entities/logo';
import { PhoneIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import { HeaderBurgerMenu } from '@/features/header-burger-menu';
import { ProductT } from '@/shared/types';

export const HeaderMobile = ({ products }: { products: ProductT[] | null }) => {
  return (
    <div className={s.container}>
      <Logo />
      <div>
        <FeedbackPopup>
          <Button className={s.phoneButton}>
            <PhoneIcon />
          </Button>
        </FeedbackPopup>
        <HeaderBurgerMenu products={products} />
      </div>
    </div>
  );
};
