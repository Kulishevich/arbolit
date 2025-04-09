import clsx from 'clsx';
import styles from './PagesHero.module.scss';
import Image, { StaticImageData } from 'next/image';

interface PagesHeroProps {
  image: StaticImageData | string;
  children: React.ReactNode;
  className?: string;
}

const PagesHero = ({ image, children, className }: PagesHeroProps) => {
  return (
    <section className={clsx(styles.container, className)}>
      <div className={styles.wrapper}>{children}</div>
      <Image
        src={image}
        alt=""
        className={styles.image}
        width={1920}
        height={1080}
      />
    </section>
  );
};

export default PagesHero;
