import clsx from 'clsx';
import styles from './MainHero.module.scss';
import Image from 'next/image';
import arbolit from '@/shared/assets/images/arbolit-compound.png';
import house from '@/shared/assets/images/house.png';
import grass from '@/shared/assets/images/grass.png';

const MainHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={clsx('h1', styles.title)}>
          Арболитовые блоки
          <span>от производителя</span>
        </h1>
        <p className={clsx('body-1', styles.text)}>
          Высочайшее качество материалов по доступным ценам
        </p>
        <Image src={arbolit} alt="Состав арболита" className={styles.image} />
        <Image src={house} alt="Дом" className={styles.house} />
      </div>
      <div className={styles.grass}>
        <Image src={grass} alt="Трава" />
      </div>
    </section>
  );
};

export default MainHero;
