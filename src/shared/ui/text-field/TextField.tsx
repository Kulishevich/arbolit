'use client';
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useEffect,
  useId,
  useRef,
} from 'react';
import clsx from 'clsx';

import s from './TextField.module.scss';

export type TextFieldProps = {
  errorMessage?: ReactNode | string;
  isRequired?: boolean;
  variant?: 'password' | 'search' | 'text';
} & ComponentPropsWithoutRef<'input'>;

type TextFieldRef = ElementRef<'input'>;

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      disabled,
      errorMessage,
      onChange,
      placeholder,
      value,
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const id = useId();

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (inputRef.current) {
        inputRef.current.value = e.target.value;
      }
    };

    useEffect(() => {
      if (inputRef) {
        if (typeof value === 'string' && inputRef.current) {
          inputRef.current.value = value;
        }
      }
    }, [value]);

    return (
      <div className={s.container}>
        <input
          className={clsx(
            s.input,
            errorMessage && s.error,
            disabled && s.disabled,
            className,
            't-placeholder'
          )}
          disabled={disabled}
          id={id}
          onChange={inputChangeHandler}
          placeholder={placeholder}
          ref={ref}
          value={value}
          inputMode={props.type === 'tel' ? 'numeric' : undefined}
          pattern={props.type === 'tel' ? '[0-9]*' : undefined}
          {...rest}
        />
        {errorMessage && (
          <p className={clsx(s.errorMessage, 'body-5')}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
