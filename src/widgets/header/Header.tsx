'use client';
import React from 'react';
import { HeaderDesktop } from './header-desktop';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { HeaderMobile } from './header-mobile';
import { ProductT, SettingT } from '@/shared/types';

export const Header = ({
  products,
  setting,
}: {
  products: ProductT[] | null;
  setting: SettingT | null;
}) => {
  const { isMobile } = useBreakpoint();

  return isMobile ? (
    <HeaderMobile products={products} setting={setting} />
  ) : (
    <HeaderDesktop products={products} setting={setting} />
  );
};
