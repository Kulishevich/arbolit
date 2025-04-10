import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import contacts from '@/shared/assets/images/contacts-bg.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import ContactsBlock from '@/widgets/ContactsBlock/ContactsBlock';
import clsx from 'clsx';
import { FeedbackForm } from '@/widgets/feedback-form';

const page = async () => {
  return (
    <main>
      <PagesHero image={contacts}>
        <PageInfo
          title="Контакты"
          text="Свяжитесь с нами удобным для вас способом посредством соцсетей, телефонов, e-mail или через форму обратной связи"
        />
      </PagesHero>
      <div className={styles.container}>
        <ContactsBlock isTitle={false} />

        <section className={styles.requisites}>
          <h2 className={clsx('h2', styles.title)}>Реквизиты компании</h2>

          <div className={clsx('body-1', styles.name)}>ООО “ДОМРЕМОНТ”</div>

          <div className={clsx('body-1', styles.info)}>
            <div className={styles.infoItem}>ИНН 781000531645</div>

            <div className={styles.infoItem}>ОГРНИП 311784703100791</div>

            <div className={styles.infoItem}>Р/счет 40802810632250001887</div>

            <div className={styles.infoItem}>
              Филиал «Санкт-Петербургский» АО «АЛЬФА-БАНК»
            </div>

            <div className={styles.infoItem}>К/счет 30101810600000000786</div>

            <div className={styles.infoItem}>БИК 044030786</div>
          </div>
        </section>

        <FeedbackForm
          title="связаться с нами"
          description="Оставьте свои контактные данные и мы ответим на все интересующие вас вопросы"
        />
      </div>
    </main>
  );
};

export default page;
