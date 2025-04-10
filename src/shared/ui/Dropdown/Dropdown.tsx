import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './Dropdown.module.scss';
import { ArrowDownIcon } from '@/shared/assets/icons';
import clsx from 'clsx';
import Link from 'next/link';

export const Dropdown = ({
  title,
  items,
  className,
}: {
  title: string;
  items: { name: string; href: string }[];
  className: string;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={clsx(styles.trigger, className)}>
        {title}
        <ArrowDownIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={5}>
          {items.map((elem) => (
            <DropdownMenu.Item className={clsx(styles.item, 'body-3')} asChild>
              <Link href={elem.href}>{elem.name}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
