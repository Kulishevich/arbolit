import clsx from 'clsx';
import styles from './AboutBanner.module.scss';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import wall from '@/shared/assets/images/arbolit-wall.png';
import bg from '@/shared/assets/images/banner-bg.svg';
import bgMobile from '@/shared/assets/images/banner-bg-mobile.svg';
import { BracketsIcon, BrickWallIcon } from '@/shared/assets/icons';

const AboutBanner = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={clsx('body-1', styles.brackets)}>
            Желаете, чтобы ваш дом был безопасным, прочным и теплым? Вы делаете
            отличный выбор, отдавая предпочтение <span>арболиту</span>. Выбирая
            арболит от компании <span>«ДОМРЕМОНТ»</span>, вы получаете материал
            первоклассного качества.
            <BracketsIcon className={styles.bracketsIcon} />
            <BracketsIcon className={styles.bracketsIcon} />
          </div>
          <Link href="/about" className={styles.link}>
            <Button variant="primary" className={styles.button}>
              подробнее о нас
            </Button>
          </Link>
        </div>
        <div className={clsx('body-2', styles.block)}>
          Выбирая арболит, вы делаете отличный выбор. Из этого материала
          получится дом, ставший вашей крепостью. Выбирая арболит от компании
          «ДОМРЕМОНТ», вы получаете материал первоклассного качества.
          <Link href="/about" className={styles.linkMobile}>
            <Button variant="primary" className={styles.button}>
              подробнее о нас
            </Button>
          </Link>
          <Image src={wall} alt="BrickWallIcon" className={styles.image} />
        </div>
        <BrickWallIcon className={styles.icon} />
      </div>
      <Image src={bg} alt="BrickWallIcon" className={styles.bg} />
      <Image src={bgMobile} alt="BrickWallIcon" className={styles.bgMobile} />
    </section>
  );
};

export default AboutBanner;
