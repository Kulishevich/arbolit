import styles from './not-found.module.scss';
import Image from 'next/image';
import notFoundImage from '@/shared/assets/images/404.png';
import notFoundImageMobile from '@/shared/assets/images/404-mobile.png';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';

export default async function notFound() {
  return (
    <section className={styles.container}>
      <div className={styles.caption}>
        <h1 className={clsx('h1', styles.title)}>Что-то пошло не так...</h1>
        <p className={clsx('body-1', styles.text)}>
          К сожалению, страница не найдена. Возможно, она была удалена или
          Вы ввели некорректный адрес <span>(ошибка 404).</span>
        </p>
        <Button as="a" href="/" className={styles.button}>
          На главную
        </Button>
      </div>
      <Image src={notFoundImage} alt="404" className={styles.image} />
      <Image
        src={notFoundImageMobile}
        alt="404"
        className={styles.imageMobile}
      />
    </section>
  );
}
