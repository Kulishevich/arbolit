import { clsx } from 'clsx';
import { ToastT, Toaster, toast } from 'sonner';

import styles from './Toast.module.scss';
import { ErrorIcon, SuccessIcon } from '@/shared/assets/icons';

const DEFAULT_DURATION = 5000;
const DEFAULT_POSITION = 'top-center';

type ToastType = 'error' | 'success';
type ToastOptions = {
  message?: string;
  title: string;
  variant?: ToastType;
} & Omit<ToastT, 'id'>;

const showToast = ({
  className,
  duration = DEFAULT_DURATION,
  icon,
  message,
  title,
  position = DEFAULT_POSITION,
  variant = 'success',
  ...props
}: ToastOptions) => {
  const typesClass = {
    error: styles.error,
    success: styles.success,
  }[variant];

  toast.custom(
    (t) => (
      <div className={clsx(styles.rootClass, typesClass, className)}>
        {variant === 'error' && <ErrorIcon />}
        {variant === 'success' && <SuccessIcon />}
        <h5 className="h5">{title}</h5>
        {!!message && <p className="body-2">{message}</p>}
      </div>
    ),
    {
      duration,
      position,
      ...props,
    }
  );
};

export { Toaster, showToast };
