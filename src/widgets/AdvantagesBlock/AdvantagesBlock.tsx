import clsx from 'clsx';
import styles from './AdvantagesBlock.module.scss';
import Image from 'next/image';
import gas from '@/shared/assets/images/gas-block.png';
import brick from '@/shared/assets/images/brick.png';
import arbolitBrick from '@/shared/assets/images/arbolit-brick.png';
import { CheckboxCrossIcon, CheckboxOkIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import { FeedbackPopup } from '@/entities/feedback-popup/FeedbackPopup';
import { MaterialAdvantagesT } from '@/shared/types';

const AdvantagesBlock = ({
  advantages,
}: {
  advantages: MaterialAdvantagesT[] | null;
}) => {
  const arbolitData = advantages?.filter((elem) => elem.material === 'arbolit');
  const gasosilicateData = advantages?.filter(
    (elem) => elem.material === 'gasosilicate'
  );
  const brickData = advantages?.filter((elem) => elem.material === 'brick');
  console.log(arbolitData);
  return (
    <section className={styles.wrapper}>
      <h2 className={clsx('h2', styles.title)}>Преимущества арболита</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={gas} alt="Газобетон" />
          <div className={clsx('h4', styles.name)}>Газосиликатный</div>
          <div className={styles.checkList}>
            {gasosilicateData?.map((elem, index) => (
              <div className={clsx('body-2', styles.listItem)} key={index}>
                <CheckboxCrossIcon />
                <div>
                  {elem.property}: <span>{elem.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.activeItem}>
          <div className={clsx('body-6', styles.pin)}>Лучший выбор</div>
          <Image src={arbolitBrick} alt="арболит" />

          <div className={clsx('h4', styles.name)}>арболит</div>
          <div className={clsx('body-5', styles.sizes)}>
            Размеры: <span>500mm x 300mm x200mm</span>
            <br />
            Масса: <span>25 кг</span> (один блок)
          </div>
          <div className={styles.checkList}>
            {arbolitData?.map((elem, index) => (
              <div className={clsx('body-2', styles.listItem)} key={index}>
                <CheckboxOkIcon />

                <div>
                  {elem.property}: <span>{elem.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={clsx('h3', styles.price)}>от 9000 ₽ /м3</div>
          <FeedbackPopup>
            <Button className={styles.button}>заказать арболит</Button>
          </FeedbackPopup>
        </div>

        <div className={styles.item}>
          <Image src={brick} alt="Кирпич" />
          <div className={clsx('h4', styles.name)}>Кирпич</div>
          <div className={styles.checkList}>
            {brickData?.map((elem, index) => (
              <div className={clsx('body-2', styles.listItem)} key={index}>
                <CheckboxCrossIcon />
                <div>
                  {elem.property}: <span>{elem.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesBlock;
