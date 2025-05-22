import React from 'react';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';
import { ProductT, SettingT, StatusBlockT } from '@/shared/types';

export const Header = ({
  products,
  setting,
  blockStatus,
}: {
  products: ProductT[] | null;
  setting: SettingT | null;
  blockStatus: StatusBlockT | null;
}) => {
  return (
    <>
      <HeaderDesktop
        products={products}
        setting={setting}
        blockStatus={blockStatus}
      />
      <HeaderMobile
        products={products}
        setting={setting}
        blockStatus={blockStatus}
      />
    </>
  );
};
