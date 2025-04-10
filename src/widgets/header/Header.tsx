'use client';
import React from 'react';
import { HeaderDesktop } from './header-desktop';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';
import { HeaderMobile } from './header-mobile';

export const Header = () => {
  const { isMobile } = useBreakpoint();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
