'use client';
import cn from 'clsx';
import s from './Breadcrumbs.module.scss';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  className?: string;
  dynamicPath?: { name: string; href: string };
}

export const Breadcrumbs = ({ className, dynamicPath }: Props) => {
  const pathname = usePathname();
  const pathNames = pathname.split('/');

  function handlePathName(path: string) {
    switch (path) {
      case '':
        return { href: '/', name: 'Главная' };
      case 'calculator':
        return { href: '/calculator', name: 'Калькулятор' };
      case 'about':
        return { href: '/about', name: 'О нас' };
      case 'certificate':
        return { href: '/certificate', name: 'Сертификаты' };
      case 'news':
        return { href: '/news', name: 'Новости' };
      case 'contacts':
        return { href: '/contacts', name: 'Контакты' };
      case 'catalog':
        return { href: '/catalog', name: 'Каталог' };
      case 'policy':
        return { href: '/policy', name: 'Политика конфиденциальности' };
      case 'delivery':
        return {
          href: '/delivery',
          name: 'Доставка',
        };
      case 'reviews':
        return {
          href: '/reviews',
          name: 'Отзывы',
        };
      case 'photo-gallery':
        return {
          href: '/photo-gallery',
          name: 'Фотогалерея',
        };
      default:
        break;
    }
  }
  const pathArr = [
    ...pathNames.map((elem) => handlePathName(elem)),
    !!dynamicPath && dynamicPath,
  ].filter((elem) => !!elem);

  const breadcrumbsJsonLd = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pathArr.map((path, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://domremont.com${path.href}`,
        name: path.name,
      },
    })),
  };

  return (
    <>
      {pathArr.length > 1 && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsJsonLd),
          }}
        />
      )}
      <div className={s.container}>
        <ul className={cn(s.list, className)}>
          {pathArr?.map((path, idx) => {
            const lastItem = idx === pathArr.length - 1;

            return (
              <li className={s.elem} key={idx}>
                {!!idx && <ArrowRightIcon className={s.icon} />}
                <Link
                  href={path?.href || '/'}
                  className={cn(lastItem && s.lastItem, 'body-5')}
                >
                  {path?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
