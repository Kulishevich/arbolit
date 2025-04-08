import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { clsx } from 'clsx';

import s from './TextArea.module.scss';

export type TextAreaProps = {
  errorMessage?: string;
  label?: string;
} & ComponentPropsWithoutRef<'textarea'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorMessage, label, ...rest }, ref) => {
    return (
      <div className={s.container}>
        <textarea
          className={clsx(
            s.textarea,
            !!errorMessage && s.error,
            className,
            't-placeholder'
          )}
          ref={ref}
          {...rest}
        />

        {!!errorMessage && (
          <p className={clsx(s.errorMessage, 'body-5')}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
