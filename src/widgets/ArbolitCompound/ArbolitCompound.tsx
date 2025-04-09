import clsx from 'clsx';
import styles from './ArbolitCompound.module.scss';
import Image from 'next/image';
import wood from '@/shared/assets/images/wood.png';
import ice from '@/shared/assets/images/ice.png';
import water from '@/shared/assets/images/water.png';
import earth from '@/shared/assets/images/earth.png';

const ArbolitCompound = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={clsx('h2', styles.title)}>состав арболита</h2>

      <div className={styles.container}>
        <div className={styles.block}>
          <Image src={wood} alt="wood" />
          <div className={styles.caption}>
            <div className={clsx('h4', styles.name)}>Древесная щепа</div>
            <p className={clsx('body-1', styles.text)}>
              Это органический целлюлозный заполнитель, используемый в арболите.
              Древесная щепа надежно защищена мощной цементной оболочкой,
              которая обеспечивает ей защиту от внешних воздействий.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <Image src={ice} alt="ice" />
          <div className={styles.caption}>
            <div className={clsx('h4', styles.name)}>минерализатор</div>
            <p className={clsx('body-1', styles.text)}>
              Минерализатор нейтрализует сахара в древесине, которые могут
              вредить цементу, улучшая качество арболитовых блоков, обеспечивая
              их большей прочностью и долговечностью.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <Image src={water} alt="water" />
          <div className={styles.caption}>
            <div className={clsx('h4', styles.name)}>Чистая вода</div>
            <p className={clsx('body-1', styles.text)}>
              Для производства арболита можно использовать техническую
              водопроводную или очищенную природную воду. Важно, чтобы в воде не
              было компонентов, мешающих твердению смеси.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <Image src={earth} alt="earth" />
          <div className={styles.caption}>
            <div className={clsx('h4', styles.name)}>Цемент</div>
            <p className={clsx('body-1', styles.text)}>
              Цемент, используемый как связующее для древесной щепы, напрямую
              влияет на прочность арболитовых блоков, он обеспечивает надежную
              связь между частицами древесного заполнителя.ю смеси.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArbolitCompound;
