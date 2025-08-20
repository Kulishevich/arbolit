'use client';
import { RangeSlider } from '@/shared/ui/range-slider';
import React, { useState } from 'react';
import s from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import clsx from 'clsx';
import { TextField } from '@/shared/ui/text-field';
import { Checkbox } from '@/shared/ui/checkbox';

export const CalculationOfInternalPartitions = () => {
  const [formData, setFormData] = useState({
    // Шаг 1
    houseLength: 0, // "Длина, м:"
    houseHeight: 0, // "Высота, м:"
    doorHeight: 0, // "Высота двери, м:"
    doorWidth: 0, // "Ширина двери, м:"
    doorsCount: 1, // "Количество дверей"

    // Шаг 2
    hasSecondFloor: false, // есть ли второй этаж
    partitionLength: 0, // "Длина, м:"
    partitionHeight: 0, // "Высота, м:"
    partitionDoorHeight: 0, // "Высота двери, м:"
    partitionDoorWidth: 0, // "Ширина двери, м:"
    partitionDoorsCount: 1, // "Количество дверей"

    // Шаг 3 (контакты)
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
        <p className={s.step}>2</p>
        <h4>Расчёт внутренних перегородок</h4>
      </div>

      <div className={s.content}>
        {step === 1 && (
          <div className={s.slidersContainer}>
            <p className={'h5'}>1. Размеры дома</p>
            <div className={s.sliders}>
              <RangeSlider
                value={formData.houseLength}
                onValueChange={(v) => updateField('houseLength', v)}
                label="Длина, м:"
                max={50}
              />
              <RangeSlider
                value={formData.houseHeight}
                onValueChange={(v) => updateField('houseHeight', v)}
                label="Высота, м:"
                max={5}
              />
              <RangeSlider
                value={formData.doorHeight}
                onValueChange={(v) => updateField('doorHeight', v)}
                label="Высота двери, м:"
                max={5}
              />
              <RangeSlider
                value={formData.doorWidth}
                onValueChange={(v) => updateField('doorWidth', v)}
                label="Ширина двери, м:"
                max={5}
              />

              <div className={s.counterContainer}>
                <label className={clsx(s.counterLabel, 'body-3')}>
                  Количество дверей:
                </label>
                <div className={s.counter}>
                  <button
                    type="button"
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField(
                        'doorsCount',
                        Math.max(0, formData.doorsCount - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <TextField
                    className={s.counterInput}
                    value={formData.doorsCount}
                    onChange={(e) =>
                      updateField('doorsCount', Number(e.target.value) || 0)
                    }
                  />
                  <button
                    type="button"
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField('doorsCount', formData.doorsCount + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={s.slidersContainer}>
            <p className={'h5'}>2. Размеры внутренних перегородок 2 этажа</p>
            <div className={s.sliders}>
              <div className={s.questionContainer}>
                <p className={clsx(s.question, 'body-3')}>
                  Есть ли второй этаж?
                </p>

                <div className={s.checkboxsContainer}>
                  <div className={s.checkbox}>
                    <Checkbox
                      id="yes"
                      checked={formData.hasSecondFloor === true}
                      onCheckedChange={() =>
                        updateField('hasSecondFloor', true)
                      }
                    />
                    <label htmlFor="yes" className={'body-5'}>
                      да
                    </label>
                  </div>
                  <div className={s.checkbox}>
                    <Checkbox
                      id="no"
                      checked={formData.hasSecondFloor === false}
                      onCheckedChange={() =>
                        updateField('hasSecondFloor', false)
                      }
                    />
                    <label htmlFor="no" className={'body-5'}>
                      нет
                    </label>
                  </div>
                </div>
              </div>

              <RangeSlider
                value={formData.partitionLength}
                onValueChange={(v) => updateField('partitionLength', v)}
                label="Длина, м:"
                max={50}
              />
              <RangeSlider
                value={formData.partitionHeight}
                onValueChange={(v) => updateField('partitionHeight', v)}
                label="Высота, м:"
                max={5}
              />
              <RangeSlider
                value={formData.partitionDoorHeight}
                onValueChange={(v) => updateField('partitionDoorHeight', v)}
                label="Высота двери, м:"
                max={5}
              />
              <RangeSlider
                value={formData.partitionDoorWidth}
                onValueChange={(v) => updateField('partitionDoorWidth', v)}
                label="Ширина двери, м:"
                max={5}
              />

              <div className={s.counterContainer}>
                <label className={clsx(s.counterLabel, 'body-3')}>
                  Количество дверей:
                </label>
                <div className={s.counter}>
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField(
                        'partitionDoorsCount',
                        Math.max(0, formData.partitionDoorsCount - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <TextField
                    className={s.counterInput}
                    value={formData.partitionDoorsCount}
                    onChange={(e) =>
                      updateField(
                        'partitionDoorsCount',
                        Number(e.target.value) || 0
                      )
                    }
                  />
                  <button
                    className={clsx(s.counterBtn, 'body-3')}
                    onClick={() =>
                      updateField(
                        'partitionDoorsCount',
                        formData.partitionDoorsCount + 1
                      )
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
            <div className={s.finalInfo}>
              <p className={clsx(s.title, 'h5')}>
                3. Количество блоков и объем
              </p>
              <div className={s.blockInfo}>
                <p className="body-1">Количество блоков:</p>
                <p className="h2">350</p>
              </div>
              <div className={s.blockInfo}>
                <p className="body-1">Объём блоков:</p>
                <p className="h2">10 м3</p>
              </div>
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
          <Image
            src={'/calculation-of-internal-partitions.png'}
            fill
            alt="calculation-of-internal-partitions-image"
          />
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
