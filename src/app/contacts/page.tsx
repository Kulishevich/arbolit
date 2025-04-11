import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import contacts from '@/shared/assets/images/contacts-bg.png';
import PageInfo from '@/features/PageInfo/PageInfo';
import ContactsBlock from '@/widgets/ContactsBlock/ContactsBlock';
import clsx from 'clsx';
import { FeedbackForm } from '@/widgets/feedback-form';
import { DesignSettingsT } from '@/shared/types';

const page = async () => {
  const info: DesignSettingsT = await fetch(
    `${process.env.API_URL}/design/settings`
  )
    .then((res) => res.json())
    .catch(() => undefined);

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

          <div
            className={clsx('body-1', styles.caption)}
            dangerouslySetInnerHTML={{ __html: info.company_info }}
          ></div>
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
