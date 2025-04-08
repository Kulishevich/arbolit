import clsx from 'clsx';
import styles from './ArbolitCharacteristicsBlock.module.scss';
import Image from 'next/image';
import arbolit from '@/shared/assets/images/arbolit-huge.png';
import ArbolitCharacteristic from '@/features/ArbolitCharacteristic/ArbolitCharacteristic';
import {
  BulbIcon,
  EcologyHouseIcon,
  GlobeIcon,
  PlanetIcon,
  SprayIcon,
  ThermometerIcon,
} from '@/shared/assets/icons';

const ArbolitCharacteristicsBlock = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={clsx('h2', styles.title)}>Характеристики арболита</h2>
      <p className={clsx('body-1', styles.description)}>
        Арболит <span>на 90%</span> состоит из древесины, однако он не горит,
        не плесневеет и, следовательно, не нуждается в дополнительной химической
        обработке.
      </p>

      <div className={styles.container}>
        <ArbolitCharacteristic
          className={styles.item}
          title="Тёплый"
          description="Арболит не нуждается в дополнительном утеплении и такой же тёплый, как и кирпич."
        >
          <BulbIcon />
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="391.5 118.5 166.5 54.42"
            className={styles.line}
          >
            <g filter="url(#filter0_dddd_131_1844)">
              <path
                d="M392 119H501.596C503.191 119 504.721 119.635 505.846 120.765L557.5 172.419"
                stroke="currentColor"
              ></path>
            </g>
          </svg>
        </ArbolitCharacteristic>
        <ArbolitCharacteristic
          className={styles.item}
          title="Безопасный"
          description="Арболит на 90% состоит из древесины и является безопасным для аллергиков."
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="391.5 118.5 166.5 54.42"
            className={styles.line}
          >
            <g filter="url(#filter0_dddd_131_1844)">
              <path
                d="M392 119H501.596C503.191 119 504.721 119.635 505.846 120.765L557.5 172.419"
                stroke="currentColor"
              ></path>
            </g>
          </svg>
          <PlanetIcon />
        </ArbolitCharacteristic>

        <ArbolitCharacteristic
          className={styles.item}
          title="Комфортный"
          description="Благодаря высокой паропроницаемости, стены дома из арболита «дышат» так же, как деревянные стены."
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="366.5 100.5 132 1"
            className={styles.line}
          >
            <path d="M367 101L498 101" stroke="currentColor"></path>
          </svg>
          <EcologyHouseIcon />
        </ArbolitCharacteristic>

        <ArbolitCharacteristic
          className={styles.item}
          title="Долговечный"
          description="Арболит сохраняет свои свойства при резких перепадах температур. Этот материал прослужит вам не один год."
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="366.5 100.5 132 1"
            className={styles.line}
          >
            <path d="M367 101L498 101" stroke="currentColor"></path>
          </svg>
          <ThermometerIcon />
        </ArbolitCharacteristic>

        <ArbolitCharacteristic
          className={styles.item}
          title="Биостойкий"
          description="Арболит устойчив к различным негативным воздействиям. Он не гниет, не плесневеет, не привлекает грызунов и насекомых."
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="391.5 118.5 166.5 54.42"
            className={styles.line}
          >
            <g filter="url(#filter0_dddd_131_1844)">
              <path
                d="M392 119H501.596C503.191 119 504.721 119.635 505.846 120.765L557.5 172.419"
                stroke="currentColor"
              ></path>
            </g>
          </svg>
          <SprayIcon />
        </ArbolitCharacteristic>

        <ArbolitCharacteristic
          className={styles.item}
          title="Звукопоглащающий"
          description="Арболит не нуждается в дополнительной звукоизоляции. Младшее поколение сможет слушать громкую музыку, не мешая старшему."
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="391.5 118.5 166.5 54.42"
            className={styles.line}
          >
            <g filter="url(#filter0_dddd_131_1844)">
              <path
                d="M392 119H501.596C503.191 119 504.721 119.635 505.846 120.765L557.5 172.419"
                stroke="currentColor"
              ></path>
            </g>
          </svg>
          <GlobeIcon />
        </ArbolitCharacteristic>

        <Image src={arbolit} alt="арболит" className={styles.image} />
      </div>
    </section>
  );
};

export default ArbolitCharacteristicsBlock;
