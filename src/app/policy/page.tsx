import PagesHero from '@/widgets/PagesHero/PagesHero';
import styles from './page.module.scss';
import PageInfo from '@/features/PageInfo/PageInfo';

import { DesignSettingsT } from '@/shared/types';
import policy from '@/shared/assets/images/policy.png';
import clsx from 'clsx';

const page = async () => {
  const info: DesignSettingsT = await fetch(
    'https://arbolitapi.webspaceteam.site/api/v1/design/settings'
  )
    .then((res) => res.json())
    .catch(() => undefined);

  return (
    <main>
      <PagesHero className={styles.hero} image={policy}>
        <PageInfo isWide title={'политика конфиденциальности'} />
      </PagesHero>
      {info && (
        <div
          className={clsx('body-1', styles.container)}
          dangerouslySetInnerHTML={{ __html: info.privacy_policy_text }}
        ></div>
      )}
    </main>
  );
};

export default page;
