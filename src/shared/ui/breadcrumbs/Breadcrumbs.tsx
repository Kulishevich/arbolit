'use client';
import cn from 'clsx';
import s from './Breadcrumbs.module.scss';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { usePathname } from 'next/navigation';

interface Props {
  className?: string;
}

export const Breadcrumbs = ({ className }: Props) => {
  const pathname = usePathname();
  const pathNames = pathname.split('/');

  function handlePathName(path: string) {
    switch (path) {
      case '':
        return { href: '/', name: 'Главная' };
      case 'about':
        return { href: '/news', name: 'Новости' };
      case 'contacts':
        return { href: '/contacts', name: 'Контакты' };
      case 'delivery-and-payment':
        return {
          href: '/delivery-and-payment',
          name: 'Доставка',
        };
      default:
        break;
    }
  }

  return (
    <div className={s.container}>
      <ul className={cn(s.list, className)}>
        {pathNames.map((pathName, idx) => {
          const path = handlePathName(pathName);
          const segments = pathname.split('/').filter(Boolean); // удалит пустые строки
          const isCurrentPage = segments[segments.length - 1] === pathName;
          const isNotEmpty = !!path && Boolean(idx);

          return (
            <li className={s.elem} key={idx}>
              {isNotEmpty && <ArrowRightIcon className={s.icon} />}
              <a
                href={path?.href || '/'}
                className={cn(!isCurrentPage && s.link, 'body-5')}
              >
                {path?.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
