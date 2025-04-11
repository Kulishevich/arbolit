import {
  checkedScheme,
  commentScheme,
  nameScheme,
  phoneScheme,
} from '@/shared/validation/validation';
import { z } from 'zod';

export const FeedbackFormScheme = (type?: 'delivery' | 'feedback') => {
  return z.object({
    name: nameScheme(),
    phone: phoneScheme(),
    comment: commentScheme(),
    isChecked: checkedScheme(),
    ...(type === 'delivery'
      ? {
          address: nameScheme(),
          count: nameScheme(),
        }
      : {}),
  });
};
