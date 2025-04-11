'use client';
import React, { useState } from 'react';
import s from './HeaderDropdown.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import { ArrowDownIcon } from '@/shared/assets/icons';
import clsx from 'clsx';

export const HeaderDropdown = ({
  title,
  items,
  className,
}: {
  title: string;
  items: { name: string; href: string }[];
  className: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={s.container}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={paths.catalog} className={clsx(s.link, className)}>
        {title}
        <ArrowDownIcon />
      </Link>

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
