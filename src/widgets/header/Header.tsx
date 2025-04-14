'use client';
import React from 'react';
import { HeaderDesktop } from './header-desktop';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { HeaderMobile } from './header-mobile';
import { ProductT } from '@/shared/types';

export const Header = ({ products }: { products: ProductT[] | null }) => {
  const { isMobile } = useBreakpoint();

  return isMobile ? (
    <HeaderMobile products={products} />
  ) : (
    <HeaderDesktop products={products} />
  );
};
