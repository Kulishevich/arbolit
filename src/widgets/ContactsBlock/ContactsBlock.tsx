import clsx from 'clsx';
import styles from './ContactsBlock.module.scss';
import Map from '@/features/Map/Map';
import Link from 'next/link';
import { Button } from '@/shared/ui/button/Button';

const ContactsBlock = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={clsx('h2', styles.title)}>контакты компании</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>Адрес</div>
            <div className={clsx('body-1', styles.infoItemContent)}>
              105005, г. Москва, Бакунинская ул., д. 10–12 стр. 4.
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>
              Контакты для связи
            </div>
            <div className={styles.infoItemContent}>
              <Link
                className={clsx('body-1', styles.link)}
                href="tel:+79255115156"
              >
                +7 925 511-51-56
              </Link>
              <Link
                className={clsx('body-1', styles.link)}
                href="tel:+79255115144"
              >
                +7 925 511-51-44
              </Link>
              <Link
                className={clsx('body-1', styles.link)}
                href="mailto:info@arbolit.ru"
              >
                info@arbolit.ru
              </Link>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>
              Мессенджеры
            </div>
            <div className={styles.infoItemContent}>
              <Button
                variant="callback"
                as="a"
                href="https://t.me/"
                target="_blank"
                className={styles.button}
              >
                telegram
              </Button>
              <Button
                variant="callback"
                as="a"
                href="https://wa.me/"
                target="_blank"
                className={styles.button}
              >
                whatsapp
              </Button>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default ContactsBlock;
