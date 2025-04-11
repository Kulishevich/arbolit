import clsx from 'clsx';
import styles from './ContactsBlock.module.scss';
import Map from '@/features/Map/Map';
import Link from 'next/link';
import { Button } from '@/shared/ui/button/Button';
import { DesignSettingsT } from '@/shared/types';

interface ContactsBlockProps {
  isTitle?: boolean;
}

const ContactsBlock = async ({ isTitle = true }: ContactsBlockProps) => {
  const info: DesignSettingsT = await fetch(
    `${process.env.API_URL}/design/settings`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <section className={styles.wrapper}>
      {isTitle && (
        <h2 className={clsx('h2', styles.title)}>контакты компании</h2>
      )}
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>Адрес</div>
            <div className={clsx('body-1', styles.infoItemContent)}>
              {info && info.address}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>
              Контакты для связи
            </div>
            <div className={styles.infoItemContent}>
              {info &&
                info.phones.map((phone) => (
                  <Link
                    key={phone}
                    className={clsx('body-1', styles.link)}
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </Link>
                ))}
              {info && (
                <Link
                  className={clsx('body-1', styles.link)}
                  href={`mailto:${info.email}`}
                >
                  {info.email}
                </Link>
              )}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>
              Мессенджеры
            </div>
            <div className={styles.infoItemContent}>
              {info && info.telegram && (
                <Button
                  variant="callback"
                  as="a"
                  href={info.telegram}
                  target="_blank"
                  className={styles.button}
                >
                  telegram
                </Button>
              )}
              {info && info.whatsapp && (
                <Button
                  variant="callback"
                  as="a"
                  href={info.whatsapp}
                  target="_blank"
                  className={styles.button}
                >
                  whatsapp
                </Button>
              )}
            </div>
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default ContactsBlock;
