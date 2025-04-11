'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './CertificateCard.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { ImageResponseT } from '@/shared/types';

export const CertificateCard = ({
  certificate,
}: {
  certificate: ImageResponseT;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.imageContainer} onClick={() => setIsOpen(true)}>
        <Image
          src={`${process.env.STORE_URL}/${certificate.photo_path}`}
          width={314}
          height={444}
          alt={certificate.title}
        />
      </div>
      <p className="body-2">{certificate.title}</p>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content
            className={s.content}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={certificate.photo_path}
              width={314}
              height={444}
              alt={certificate.title}
              onClick={(e) => e.stopPropagation()}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </div>
  );
};
