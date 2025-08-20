import React from 'react';
import s from './styles.module.scss';
import { BoxCalculator } from './BoxCalculator';
import { CalculationOfInternalPartitions } from './CalculationOfInternalPartitions';
import { CalculationExample } from './CalculationExample';
import { CalculatorNavigation } from './CalculatorNavigation';

export const CalculatorSection = () => {
  return (
    <div className={s.container}>
      <CalculatorNavigation />
      <BoxCalculator />
      <CalculationOfInternalPartitions />
      <CalculationExample />
    </div>
  );
};
