'use client';
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import s from './GalleryCard.module.scss';

export const GalleryCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.imageContainer} onClick={() => setIsOpen(true)}>
        <Image src={'/gallery.png'} fill alt="gallery" />
      </div>
      <p className="h5">коттедж из арболита в подмосковье</p>

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
              src={'/gallery.png'}
              width={426}
              height={240}
              alt="gallery"
              onClick={(e) => e.stopPropagation()}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </div>
  );
};
