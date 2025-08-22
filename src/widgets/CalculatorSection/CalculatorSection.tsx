import React from 'react';
import s from './styles.module.scss';
import { BoxCalculator } from './BoxCalculator';
import { CalculationOfInternalPartitions } from './CalculationOfInternalPartitions';
import { CalculationExample } from './CalculationExample';
import { CalculatorNavigation } from './CalculatorNavigation';
import { getProducts } from '@/shared/api/getProducts';

export const CalculatorSection = async () => {
  const products = await getProducts();

  const arbolitPrice = Number(products?.[0].price) || 8900;

  return (
    <div className={s.container}>
      <CalculatorNavigation />
      <BoxCalculator arbolitPrice={arbolitPrice} />
      <CalculationOfInternalPartitions arbolitPrice={arbolitPrice} />
      <CalculationExample />
    </div>
  );
};
