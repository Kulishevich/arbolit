'use client';
import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import s from './styles.module.scss';
import clsx from 'clsx';
import { CommentIcon } from '@/shared/assets/icons';

interface RangeSliderProps {
  max?: number;
  min?: number;
  step?: number;
  defaultValue?: number;
  label?: string;
  value: number;
  onValueChange?: (value: number) => void;
}

export function RangeSlider({
  max = 100,
  min = 0,
  step = 1,
  label,
  value,
  onValueChange,
}: RangeSliderProps) {
  return (
    <div className={s.container}>
      <label className={clsx(s.label, 'body-3')}>{label}</label>
      <div className={s.sliderContainer}>
        <Slider.Root
          className={s.sliderRoot}
          value={[value]}
          onValueChange={(v) => onValueChange?.(v[0])}
          max={max}
          min={min}
          step={step}
        >
          <Slider.Track className={s.sliderTrack}>
            <Slider.Range className={s.sliderRange} />
          </Slider.Track>
          <Slider.Thumb className={s.sliderThumb}>
            <div className={s.thumbValueContainer}>
              <CommentIcon className={s.thumbIcon} />
              <span className={clsx(s.thumbValue, 'body-3')}>{value}</span>
            </div>
          </Slider.Thumb>
        </Slider.Root>
        <div className={s.values}>
          <label className="body-5">{min}</label>
          <label className="body-5">{max}</label>
        </div>
      </div>
    </div>
  );
}
