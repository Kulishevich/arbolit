import React from 'react';
import s from './Logo.module.scss';
import Link from 'next/link';
import { paths } from '@/shared/config/constants/paths';
import Image from 'next/image';

export const Logo = ({ logo }: { logo: string | undefined }) => {
  return (
    <Link href={paths.home} className={s.logo}>
      <div className={s.imageContainer}>
        {!!logo && (
          <Image src={`${process.env.STORE_URL}/${logo}`} fill alt="logo" />
        )}
      </div>
      <div>
        <p className="h5">ООО &quot;Домремонт&quot;</p>
        <p className="body-5">Арболитовые блоки</p>
      </div>
    </Link>
  );
};
