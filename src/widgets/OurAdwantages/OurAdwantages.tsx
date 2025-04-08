import clsx from 'clsx';
import styles from './OurAdvantages.module.scss';
import Image from 'next/image';
import factory from '@/shared/assets/images/arbolit-factory.png';
import five from '@/shared/assets/images/arbolit-five.png';
import { CheckCircleIcon, GearIcon } from '@/shared/assets/icons';

const OurAdvantages = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.caption}>
        <h2 className={clsx('h2', styles.title)}>Наши преимущества</h2>
        <p className={clsx('body-1', styles.description)}>
          Наш арболит соответствует всем стандартам качества и обеспечивает
          безопасность, тепло и уют. Мы используем новейшее оборудование
          и контролируем каждый этап производства. Арболит — экологичный,
          пожаробезопасный, теплый и прочный материал. Наш блок обладает всеми
          его достоинствами. За короткий срок мы заняли лидирующие позиции среди
          производителей арболита в России и не намерены их сдавать.
          Мы постоянно улучшаем качество блоков для вас.
        </p>
      </div>
      <div className={styles.advantages}>
        <div className={styles.item}>
          <div className={styles.bg}>
            <Image src={factory} alt="сертифицированная продукция" />
          </div>
          <h3 className={clsx('h5', styles.itemTitle)}>
            сертифицированная продукция
          </h3>
        </div>
        <div className={styles.item}>
          <h3 className={clsx('h5', styles.itemTitle)}>
            автоматизированное производство
          </h3>
          <GearIcon />
        </div>
        <div className={styles.item}>
          <h3 className={clsx('h5', styles.itemTitle)}>качественное сырьё</h3>
          <CheckCircleIcon />
        </div>
        <div className={styles.item}>
          <div className={styles.bg}>
            <Image src={five} alt="приятная цена" />
          </div>
          <h3 className={clsx('h5', styles.itemTitle)}>приятная цена</h3>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
