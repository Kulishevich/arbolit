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

export const BoxCalculator = () => {
  const [formData, setFormData] = useState({
    width: 1, //ширина дома
    length: 1, //длина дома
    height: 1, //высота дома
    gableHeight: 1, //высота фронтона
    gablesCount: 1, //кол-во фротонов

    window1Width: 1, //ширина окна 1ого типа
    window1Height: 1, //высота окна 1ого типа
    window1Count: 0, //кол-во окна 1ого типа

    window2Width: 1, //ширина окна 2ого типа
    window2Height: 1, //высота окна 2ого типа
    window2Count: 0, //кол-во окна 2ого типа

    window3Width: 1, //ширина дверей 1ого типа
    window3Height: 1, //высота дверей 1ого типа
    window3Count: 0, //кол-во дверей 1ого типа

    wallThickness: 20, //желаемая толщина стен

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

  const stepIncrement = () => {
    if (step < 3) {
      setStep((prev) => ++prev);
    }
  };

  const stepDecrement = () => {
    if (step > 1) {
      setStep((prev) => --prev);
    }
  };

  const { price, totalV, blocksCount } = useMemo(() => {
    const {
      width,
      length,
      height,
      gableHeight,
      gablesCount,
      window1Width,
      window1Height,
      window1Count,
      window2Width,
      window2Height,
      window2Count,
      window3Width,
      window3Height,
      window3Count,
      wallThickness,
    } = formData;

    // 1. Площадь стен (2 * высота дома * (ширина + длинна))
    const S_sten = 2 * height * (length + width);
    console.log('Sстен =', S_sten);

    // 2. Площадь фронтонов (0.5 * Высота фротона * ширина здания * кол-во фронтонов )
    const S_fronton = 0.5 * gableHeight * width * gablesCount;
    console.log('Sфронтов =', S_fronton);

    // 3. Окна и двери (ширина * высота * кол-во)
    const S_window1 = window1Width * window1Height * window1Count;
    const S_window2 = window2Width * window2Height * window2Count;
    const S_door = window3Width * window3Height * window3Count;
    // складываем все площади
    const S_windowsDoors = S_window1 + S_window2 + S_door;
    console.log('Sокон+дверей = ', S_windowsDoors);

    // 4. Наружная площадь (площадь фротонов + площадь стен)
    const S_naruzh = S_sten + S_fronton;
    console.log('Sнаруж = ', S_naruzh);

    // 5. Чистая площадь (наружная - площадь окон и дверей)
    const S_total = S_naruzh - S_windowsDoors;
    console.log('Sобщ', S_total);

    // 6. Объем (площадь умножаем на толщину стен (толщина в метрах))
    const V = S_total * (wallThickness / 100); //делим толщину на 100 тк изначально она в см
    const totalV = V.toFixed(2);

    // 7. Цена (объём на цену)
    const price = Math.round(V * 8900);

    //8. Кол-во блоков: (тут под вопросом тк хз считать исходя из объёма или площади, может быть ошибка!!!)
    // если чистая площадь больше нуля то делим её на 0.15, если меньше то кол-во = 0
    const blocksCount = S_total > 0 ? Math.ceil(S_total / 0.15) : 0;

    return { price, totalV, blocksCount };
  }, [formData]);

  const sendFeedback = async () => {
    const orderData = {
      name: formData.name,
      phone: formData.phone,
      comment: `Адрес: ${formData.address}, Email: ${formData.email}, \n
       ширина дома: ${formData.width}, \n
        длина дома: ${formData.length}, \n
        высота дома: ${formData.height}, \n
        высота фронтона: ${formData.gableHeight}, \n
        кол-во фротонов: ${formData.gablesCount}, \n

        ширина окна 1ого типа: ${formData.window1Width}, \n
        высота окна 1ого типа: ${formData.window1Height}, \n
        кол-во окна 1ого типа: ${formData.window1Count}, \n

        ширина окна 2ого типа: ${formData.window2Width}, \n
        высота окна 2ого типа: ${formData.window2Height}, \n
        кол-во окна 2ого типа: ${formData.window2Count}, \n

        ширина дверей 1ого типа: ${formData.window3Width}, \n
        высота дверей 1ого типа: ${formData.window3Height}, \n
        кол-во дверей 1ого типа: ${formData.window3Count}, \n

        2желаемая толщина стен: ${formData.wallThickness}, \n

        Итоговая цена:  ${price} , \n
        Объём:  ${totalV} , \n
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
    <div className={s.container} id="step-1">
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
                step={0.1}
              />
              <RangeSlider
                value={formData.window1Height}
                onValueChange={(v) => updateField('window1Height', v)}
                label="Высота окон , м:"
                max={5}
                step={0.1}
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
                step={0.1}
              />
              <RangeSlider
                value={formData.window2Height}
                onValueChange={(v) => updateField('window2Height', v)}
                label="Высота окон , м:"
                max={5}
                step={0.1}
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
                        'window2Count',
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
                label="Ширина двери, м:"
                max={5}
                step={0.1}
              />
              <RangeSlider
                value={formData.window3Height}
                onValueChange={(v) => updateField('window3Height', v)}
                label="Высота двери, м:"
                max={5}
                step={0.1}
              />

              <div className={s.counterContainer}>
                <label className={clsx(s.counterLabel, 'body-3')}>
                  Количество дверей этого типа:
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
                  step={10}
                />
              </div>
            </div>

            <div className={s.fullPrice}>
              <div className={s.elem}>
                <p className="body-1">Объём блоков:</p>
                <p className="h2">{totalV} м³</p>
              </div>
              <div className={s.elem}>
                <p className="body-1">Количество блоков:</p>
                <p className="h2">{blocksCount}</p>
              </div>
              <div className={s.elem}>
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

        <div className={clsx(s.imageContainer)}>
          <Image src={'/box-calculator.png'} fill alt="box-calculator-image" />
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

      <div className={clsx(s.mobileImageContainer)}>
        <Image src={'/box-calculator.png'} fill alt="box-calculator-image" />
      </div>
    </div>
  );
};
