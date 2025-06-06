import clsx from 'clsx';
import styles from './OurAdvantages.module.scss';
import Image from 'next/image';
import factory from '@/shared/assets/images/arbolit-factory.png';
import five from '@/shared/assets/images/arbolit-five.png';
import { CheckCircleIcon, GearIcon } from '@/shared/assets/icons';
import { getOurAdvantages } from '@/shared/api/getOurAdvantages';

const OurAdvantages = async () => {
  const advantages = await getOurAdvantages();

  return (
    <section className={styles.wrapper}>
      <div className={styles.caption}>
        <h2 className={clsx('h2', styles.title)}>Наши преимущества</h2>
        <div
          className={clsx('body-1', styles.description)}
          dangerouslySetInnerHTML={{ __html: advantages?.main_text || '' }}
        />
      </div>
      <div className={styles.advantages}>
        <div className={styles.item}>
          <div className={styles.bg}>
            <Image src={factory} alt="сертифицированная продукция" />
          </div>
          <h3 className={clsx('h5', styles.itemTitle)}>
            {advantages?.blocks[0].title}
          </h3>
        </div>
        <div className={styles.item}>
          <h3 className={clsx('h5', styles.itemTitle)}>
            {advantages?.blocks[1].title}
          </h3>
          <GearIcon />
        </div>
        <div className={styles.item}>
          <h3 className={clsx('h5', styles.itemTitle)}>
            {' '}
            {advantages?.blocks[2].title}
          </h3>
          <CheckCircleIcon />
        </div>
        <div className={styles.item}>
          <div className={styles.bg}>
            <Image src={five} alt="приятная цена" />
          </div>
          <h3 className={clsx('h5', styles.itemTitle)}>
            {' '}
            {advantages?.blocks[3].title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
