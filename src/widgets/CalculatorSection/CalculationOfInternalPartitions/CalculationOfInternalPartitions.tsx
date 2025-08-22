'use client';
import { RangeSlider } from '@/shared/ui/range-slider';
import React, { useMemo, useState } from 'react';
import s from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import clsx from 'clsx';
import { TextField } from '@/shared/ui/text-field';
import { Checkbox } from '@/shared/ui/checkbox';
import { createOrder } from '@/shared/api/createOrder';
import { showToast } from '@/shared/ui/toast';
import { useBreakpoint } from '@/shared/lib/hooks/useBreakpoint';

export const CalculationOfInternalPartitions = ({
  arbolitPrice,
}: {
  arbolitPrice: number;
}) => {
  const { isTablet } = useBreakpoint();

  const [formData, setFormData] = useState({
    // Шаг 1
    houseLength: 1, // "Длина, м:"
    houseHeight: 1, // "Высота, м:"
    doorHeight: 1, // "Высота двери, м:"
    doorWidth: 1, // "Ширина двери, м:"
    doorsCount: 0, // "Количество дверей"

    // Шаг 2
    hasSecondFloor: false, // есть ли второй этаж
    partitionLength: 1, // "Длина, м:"
    partitionHeight: 1, // "Высота, м:"
    partitionDoorHeight: 1, // "Высота двери, м:"
    partitionDoorWidth: 1, // "Ширина двери, м:"
    partitionDoorsCount: 0, // "Количество дверей"

    // Шаг 3 (контакты)
    address: '',
    name: '',
    phone: '',
    email: '',
    consent: false,
  });

  const updateField = (
    field: keyof typeof formData,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [step, setStep] = useState(1);

  const stepDecrement = () => {
    if (step > 1) {
      setStep((prev) => --prev);
    }
    const el = document.getElementById('step-2');

    if (el) {
      const yOffset = !isTablet ? -200 : -100; // отступ сверху
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const stepIncrement = () => {
    if (step < 3) {
      setStep((prev) => ++prev);
    }
    const el = document.getElementById('step-2');

    if (el) {
      const yOffset = !isTablet ? -200 : -100; // отступ сверху
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const { blocksCount, volume, price } = useMemo(() => {
    // S1 для 1 этажа
    const S1walls = formData.houseHeight * formData.houseLength;
    const S1doors =
      formData.doorWidth * formData.doorHeight * formData.doorsCount;
    // от площади стен отнимаем площадь дверей
    const S1 = S1walls - S1doors;

    // S2 для 2 этажа (если есть)
    let S2 = 0;
    if (formData.hasSecondFloor) {
      const S2walls = formData.partitionHeight * formData.partitionLength;
      const S2doors =
        formData.partitionDoorWidth *
        formData.partitionDoorHeight *
        formData.partitionDoorsCount;
      S2 = S2walls - S2doors;
    }

    const totalArea = S1 + S2;
    const blocksCount = totalArea > 0 ? Math.ceil(totalArea / 0.15) : 0;
    const volume = totalArea > 0 ? +(totalArea * 0.2).toFixed(2) : 0;

    const price = Math.round(volume * arbolitPrice);
    // S1 – площадь внутренних перегородок 1-го этажа
    // S2 – площадь внутренних перегородок 2-го этажа
    // totalArea – суммарная площадь перегородок
    // blocksCount – количество блоков
    // volume – объём блоков
    // price - цена
    return { S1, S2, totalArea, blocksCount, volume, price };
  }, [formData]);

  const sendFeedback = async () => {
    const orderData = {
      name: formData.name,
      phone: formData.phone,
      comment: `Адрес: ${formData.address}, Email: ${formData.email}, \n
        "Длина, м:" ${formData.houseLength}, \n
        "Высота, м:" ${formData.houseHeight}, \n
        "Высота двери, м:" ${formData.doorHeight}, \n
        "Ширина двери, м:" ${formData.doorWidth}, \n
        "Количество дверей" ${formData.doorsCount}, \n

        Есть ли второй этаж: ${formData.hasSecondFloor ? 'Да' : 'Нет'}, \n
        "Длина, м:" ${formData.partitionLength}, \n
        "Высота, м:" ${formData.partitionHeight}, \n
        "Высота двери, м:" ${formData.partitionDoorHeight}, \n
        "Ширина двери, м:" ${formData.partitionDoorWidth}, \n
        "Количество дверей:" ${formData.partitionDoorsCount}, \n
  
        Итоговая цена:  ${price} , \n
        Объём:  ${volume} , \n
        Кол-во блоков:  ${blocksCount} , \n
        `,
    };

    try {
      await createOrder(orderData);

      showToast({
        title: 'Ваша заявка получена!',
        message: 'Скоро наш менеджер свяжется с вами.',
        variant: 'success',
      });
    } catch (err) {
      showToast({
        title: 'Ваша заявка не получена...',
        message: 'Пожалуйста, повторите попытку ещё раз.',
        variant: 'error',
      });
      console.log(err);
    }
  };
  return (
    <div className={s.container} id="step-2">
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
                step={0.1}
              />
              <RangeSlider
                value={formData.doorWidth}
                onValueChange={(v) => updateField('doorWidth', v)}
                label="Ширина двери, м:"
                max={5}
                step={0.1}
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
                step={0.1}
              />
              <RangeSlider
                value={formData.partitionDoorWidth}
                onValueChange={(v) => updateField('partitionDoorWidth', v)}
                label="Ширина двери, м:"
                max={5}
                step={0.1}
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
                <p className="h2">{blocksCount}</p>
              </div>
              <div className={s.blockInfo}>
                <p className="body-1">Объём блоков:</p>
                <p className="h2">{volume} м³</p>
              </div>
              <div className={s.blockInfo}>
                <p className="body-1">Итого стоимость арболитовых блоков:</p>
                <p className="h2">{price} ₽</p>
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

              <Button onClick={sendFeedback} disabled={!formData.consent}>
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

      <div className={s.buttonsContainer}>
        {step > 1 && (
          <Button className={s.stepBtn} onClick={stepDecrement}>
            Предыдущий шаг
          </Button>
        )}
        {step < 3 && (
          <Button className={s.stepBtn} onClick={stepIncrement}>
            Следующий шаг
          </Button>
        )}
      </div>

      <div className={s.mobileImageContainer}>
        <Image
          src={'/calculation-of-internal-partitions.png'}
          fill
          alt="calculation-of-internal-partitions-image"
        />
      </div>
    </div>
  );
};
