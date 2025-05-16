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
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';

export type CheckboxProps = {
  error?: string;
  isRequired?: boolean;
  label?: ReactNode;
  errorMessage?: string;
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    isRequired,
    label,
    errorMessage,
    ...rest
  } = props;
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
        {!!label && (
          <Link
            href={paths.policy}
            target="_blank"
            className={clsx(
              s.label,
              disabled && s.disabled,
              isRequired && s.isRequired,
              'body-5'
            )}
          >
            {label}
          </Link>
        )}
      </div>
      {!!errorMessage && (
        <p className={clsx(s.errorMessage, 'body-5')}>{errorMessage}</p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
