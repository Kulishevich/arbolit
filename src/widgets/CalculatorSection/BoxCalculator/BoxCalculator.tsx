'use client';
import { RangeSlider } from '@/shared/ui/range-slider';
import React, { useState } from 'react';
import s from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import clsx from 'clsx';
import { TextField } from '@/shared/ui/text-field';
import { Checkbox } from '@/shared/ui/checkbox';

export const BoxCalculator = () => {
  const [formData, setFormData] = useState({
    width: 0,
    length: 0,
    height: 0,
    gableHeight: 0,
    gablesCount: 0,

    window1Width: 0,
    window1Height: 0,
    window1Count: 1,

    window2Width: 0,
    window2Height: 0,
    window2Count: 1,

    window3Width: 0,
    window3Height: 0,
    window3Count: 1,

    wallThickness: 20,

    address: '',
    name: '',
    phone: '',
    email: '',
    consent: false,
  });

  const updateField = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [step, setStep] = useState(1);

  const stepIncrement = () => {
    if (step < 3) {
      setStep((prev) => ++prev);
    }
  };

  return (
    <div className={s.container}>
      <div className={clsx(s.stepHeader, 'h4')}>
        <p className={s.step}>1</p>
        <h4>Расчёт коробки</h4>
      </div>

      <div className={s.content}>
        {step === 1 && (
          <div className={s.slidersContainer}>
            <p className={'h5'}>1. Размеры дома</p>
            <div className={s.sliders}>
              <RangeSlider
                value={formData.width}
                onValueChange={(v) => updateField('width', v)}
                label="Ширина, м:"
                max={15}
              />
              <RangeSlider
                value={formData.length}
                onValueChange={(v) => updateField('length', v)}
                label="Длина, м:"
                max={15}
              />
              <RangeSlider
                value={formData.height}
                onValueChange={(v) => updateField('height', v)}
                label="Высота, м:"
                max={15}
              />
              <RangeSlider
                value={formData.gableHeight}
                onValueChange={(v) => updateField('gableHeight', v)}
                label="Высота фронтона , м:"
                max={5}
              />
              <RangeSlider
                value={formData.gablesCount}
                onValueChange={(v) => updateField('gablesCount', v)}
                label="Количество фронтонов: "
                max={4}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={s.slidersContainer}>
            <p className={'h5'}>2. Размеры окон и дверей</p>
            <div className={s.sliders}>
              <RangeSlider
                value={formData.window1Width}
                onValueChange={(v) => updateField('window1Width', v)}
                label="Ширина окон, м: "
                max={5}
              />
              <RangeSlider
                value={formData.window1Height}
                onValueChange={(v) => updateField('window1Height', v)}
                label="Высота окон , м:"
                max={5}
              />

              <div className={s.counterContainer}>
                <label className={clsx(s.counterLabel, 'body-3')}>
                  Количество окон этого типа:
                </label>
                <div className={s.counter}>
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField(
                        'window1Count',
                        Math.max(0, formData.window1Count - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <TextField
                    className={s.counterInput}
                    value={formData.window1Count}
                    onChange={(e) =>
                      updateField('window1Count', Number(e.target.value) || 0)
                    }
                  />
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField('window1Count', formData.window1Count + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <RangeSlider
                value={formData.window2Width}
                onValueChange={(v) => updateField('window2Width', v)}
                label="Ширина окон, м: "
                max={5}
              />
              <RangeSlider
                value={formData.window2Height}
                onValueChange={(v) => updateField('window2Height', v)}
                label="Высота окон , м:"
                max={5}
              />

              <div className={s.counterContainer}>
                <label className={clsx(s.counterLabel, 'body-3')}>
                  Количество окон этого типа:
                </label>
                <div className={s.counter}>
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField(
                        'window1Count',
                        Math.max(0, formData.window2Count - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <TextField
                    className={s.counterInput}
                    value={formData.window2Count}
                    onChange={(e) =>
                      updateField('window2Count', Number(e.target.value) || 0)
                    }
                  />
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField('window2Count', formData.window2Count + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <RangeSlider
                value={formData.window3Width}
                onValueChange={(v) => updateField('window3Width', v)}
                label="Ширина окон, м: "
                max={5}
              />
              <RangeSlider
                value={formData.window3Height}
                onValueChange={(v) => updateField('window3Height', v)}
                label="Высота окон , м:"
                max={5}
              />

              <div className={s.counterContainer}>
                <label className={clsx(s.counterLabel, 'body-3')}>
                  Количество окон этого типа:
                </label>
                <div className={s.counter}>
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField(
                        'window3Count',
                        Math.max(0, formData.window3Count - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <TextField
                    className={s.counterInput}
                    value={formData.window3Count}
                    onChange={(e) =>
                      updateField('window3Count', Number(e.target.value) || 0)
                    }
                  />
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField('window3Count', formData.window3Count + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={s.thirdStep}>
            <div className={s.slidersContainer}>
              <p className={'h5'}>3. Ширина стены</p>
              <div className={s.sliders}>
                <RangeSlider
                  value={formData.wallThickness}
                  onValueChange={(v) => updateField('wallThickness', v)}
                  label="Желаемая толщина стены, см: "
                  min={20}
                  max={70}
                />
              </div>
            </div>

            <div className={s.fullPrice}>
              <p className="body-1">Итого стоимость арболитовых блоков:</p>
              <p className="h2">27 800 ₽</p>
            </div>

            <div className={s.feedbackForm}>
              <p className="h5">4. контактные данные для доставки</p>

              <TextField
                placeholder="Адрес доставки"
                value={formData.address}
                onChange={(e) => updateField('address', e.target.value)}
              />
              <TextField
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
              <TextField
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
              />
              <TextField
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />

              <Checkbox
                label="Согласие на обработку персональных данных"
                checked={formData.consent}
                onCheckedChange={(v) => updateField('consent', v)}
              />

              <Button
                onClick={() => console.log(formData)}
                disabled={!formData.consent}
              >
                Заказать
              </Button>
            </div>
          </div>
        )}

        <div className={s.imageContainer}>
          <Image src={'/box-calculator.png'} fill alt="box-calculator-image" />
        </div>
      </div>

      {step < 3 && (
        <Button className={s.stepBtn} onClick={stepIncrement}>
          Следующий шаг
        </Button>
      )}
    </div>
  );
};
