import { z } from 'zod';
import { validation } from './validation.errors';

export const nameScheme = () =>
  z.string().trim().min(1, { message: validation.requiredField });

export const commentScheme = () =>
  z.string().trim().max(300, { message: validation.maxLength });

export const checkedScheme = () =>
  z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: validation.agreeToTerms,
    });

export const phoneScheme = () =>
  z.string().trim().min(1, { message: validation.requiredField });
