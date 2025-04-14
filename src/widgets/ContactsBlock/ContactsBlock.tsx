import clsx from 'clsx';
import styles from './ContactsBlock.module.scss';
import Map from '@/features/Map/Map';
import Link from 'next/link';
import { Button } from '@/shared/ui/button/Button';
import { SettingT } from '@/shared/types';

interface ContactsBlockProps {
  isTitle?: boolean;
  setting: SettingT | null;
}

const ContactsBlock = async ({
  isTitle = true,
  setting,
}: ContactsBlockProps) => {
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
              {setting && setting.address}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>
              Контакты для связи
            </div>
            <div className={styles.infoItemContent}>
              {setting &&
                setting.phones.map((phone) => (
                  <Link
                    key={phone}
                    className={clsx('body-1', styles.link)}
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </Link>
                ))}
              {setting && (
                <Link
                  className={clsx('body-1', styles.link)}
                  href={`mailto:${setting.email}`}
                >
                  {setting.email}
                </Link>
              )}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={clsx('body-2', styles.infoItemTitle)}>
              Мессенджеры
            </div>
            <div className={styles.infoItemContent}>
              {setting && setting.telegram && (
                <Button
                  variant="callback"
                  as={Link}
                  href={`https://t.me/${setting?.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className={styles.button}
                >
                  telegram
                </Button>
              )}
              {setting && setting.whatsapp && (
                <Button
                  variant="callback"
                  as={Link}
                  href={`https://wa.me/${setting?.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
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
