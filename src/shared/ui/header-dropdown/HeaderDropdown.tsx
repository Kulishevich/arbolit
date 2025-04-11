'use client';
import React, { useState } from 'react';
import s from './HeaderDropdown.module.scss';
import Link from 'next/link';
import { ArrowDownIcon } from '@/shared/assets/icons';
import clsx from 'clsx';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';

export const HeaderDropdown = ({
  title,
  items,
  className,
  href,
}: {
  title: string;
  items: { name: string; href: string }[];
  className: string;
  href: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  const { isMobile } = useBreakpoint();
  return (
    <div
      className={s.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isMobile ? (
        <Link href={href} className={clsx(s.link, className)}>
          {title}
          <ArrowDownIcon />
        </Link>
      ) : (
        <p className={clsx(s.link, className)}>
          {title}
          <ArrowDownIcon />
        </p>
      )}

      {isHover && (
        <div className={s.navigation}>
          {items.map((elem, index) => (
            <Link href={elem.href} key={index} className="body-3">
              {elem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
