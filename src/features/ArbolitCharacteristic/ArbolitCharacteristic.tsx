'use client';
import clsx from 'clsx';
import styles from './ArbolitCharacteristic.module.scss';
import { useEffect, useRef, useState } from 'react';

interface ArbolitCharacteristicProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

function ArbolitCharacteristic({
  title,
  description,
  children,
  className,
}: ArbolitCharacteristicProps) {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkPosition = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;

      if (Math.abs(elementCenter - screenCenter) < rect.height / 2) {
        setIsActive(true);
      }
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition();

    return () => window.removeEventListener('scroll', checkPosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(styles.container, className, isActive && styles.active)}
    >
      {children}
      <h3 className={clsx('h5', styles.title)}>{title}</h3>
      <p className={clsx('body-5', styles.description)}>{description}</p>
    </div>
  );
}

export default ArbolitCharacteristic;
