'use client';
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import s from './GalleryCard.module.scss';
import { ImageResponseT } from '@/shared/types';

export const GalleryCard = ({ photo }: { photo: ImageResponseT }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.imageContainer} onClick={() => setIsOpen(true)}>
        <Image
          src={`${process.env.STORE_URL}/${photo.photo_path}`}
          width={424}
          height={240}
          alt={photo.title}
        />
      </div>
      <p className="h5">{photo.title}</p>

      <Dialog.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        aria-label="Увеличенное изображение"
      >
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content
            className={s.content}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={`${process.env.STORE_URL}/${photo.photo_path}`}
              width={424}
              height={240}
              alt={photo.title}
              onClick={(e) => e.stopPropagation()}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </div>
  );
};
