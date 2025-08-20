import React from 'react';
import s from './styles.module.scss';
import { BoxCalculator } from './BoxCalculator';
import { CalculationOfInternalPartitions } from './CalculationOfInternalPartitions';
import { CalculationExample } from './CalculationExample';

export const CalculatorSection = () => {
  return (
    <div className={s.container}>
      <div className={s.navigation}></div>

      <BoxCalculator />
      <CalculationOfInternalPartitions />
      <CalculationExample />
    </div>
  );
};
