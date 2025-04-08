import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useId,
} from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';

import s from './Checkbox.module.scss';
import { CheckedIcon } from '@/shared/assets/icons';

export type CheckboxProps = {
  error?: string;
  isRequired?: boolean;
  label?: ReactNode;
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, disabled, error, isRequired, label, ...rest } = props;
  const checkboxId = useId();

  return (
    <div>
      <div className={s.container}>
        <RadixCheckbox.Root
          className={clsx(s.root, error && s.error, className)}
          disabled={disabled}
          id={checkboxId}
          ref={ref}
          {...rest}
        >
          <RadixCheckbox.Indicator
            className={clsx(s.indicator, disabled && s.disabled)}
          >
            <CheckedIcon className={s.icon} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <p
            className={clsx(
              s.label,
              disabled && s.disabled,
              isRequired && s.isRequired,
              'body-5'
            )}
          >
            {label}
          </p>
        )}
      </div>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
