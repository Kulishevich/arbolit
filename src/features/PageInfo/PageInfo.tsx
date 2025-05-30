import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import styles from './PageInfo.module.scss';
import clsx from 'clsx';

interface PageInfoProps {
  title: string;
  text?: string;
  isWide?: boolean;
  dynamicPath?: { name: string; href: string };
}

const PageInfo = ({
  title,
  text,
  isWide = false,
  dynamicPath,
}: PageInfoProps) => {
  return (
    <div className={clsx(styles.container, { [styles.wide]: isWide })}>
      <Breadcrumbs dynamicPath={dynamicPath} />
      <h1 className={clsx('h1-other', styles.title)}>{title}</h1>
      {text && <p className={clsx('body-2', styles.text)}>{text}</p>}
    </div>
  );
};

export default PageInfo;
