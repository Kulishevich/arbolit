import styles from './SeoText.module.scss';
import { getSeoText } from '@/shared/api/getSeoText';
const SeoText = async ({ page }: { page: string }) => {
  const seoText = await getSeoText(page);

  if (!seoText) {
    return null;
  }

  return (
    <section
      className={styles.wrapper}
      dangerouslySetInnerHTML={{ __html: seoText }}
    />
  );
};

export default SeoText;
