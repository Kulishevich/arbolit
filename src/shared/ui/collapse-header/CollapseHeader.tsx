import React, { ReactNode, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import s from './CollapseHeader.module.scss';
import { ArrowDownIcon } from '@/shared/assets/icons';

export const CollapseHeader = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={s.rootState}
    >
      <Collapsible.Trigger className={s.trigger}>
        <h2 className="h2">{title}</h2>
        <ArrowDownIcon />
      </Collapsible.Trigger>
      <Collapsible.Content className={s.content}>
        <div className={s.wrapper}>{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
