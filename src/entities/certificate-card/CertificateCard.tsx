'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './CertificateCard.module.scss';
import * as Dialog from '@radix-ui/react-dialog';

export const CertificateCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.imageContainer} onClick={() => setIsOpen(true)}>
        <Image src={'/certificate.png'} fill alt="certificate" />
      </div>
      <p className="body-2">
        Решение о сертификации арболитовых блоков по ГОСТ
      </p>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content
            className={s.content}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={'/certificate.png'}
              width={314}
              height={444}
              alt="certificate"
              onClick={(e) => e.stopPropagation()}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </div>
  );
};
