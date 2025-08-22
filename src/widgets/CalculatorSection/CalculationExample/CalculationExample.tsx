import React from 'react';
import s from './styles.module.scss';
import clsx from 'clsx';

export const CalculationExample = () => {
  return (
    <div className={s.container} id="step-3">
      <div className={s.header}>
        <p className={clsx(s.number, 'h4')}>3</p>
        <h4 className="h4">пример расчёта</h4>
      </div>

      <p className="body-1">
        Ниже приведён пошаговый пример расчета арболитовых блоков для дома
        размерами 8×10 метров. Такой подход позволяет с высокой точностью
        определить объем и количество арболитовых блоков, требуемых для
        постройки дома с перегородками.
      </p>

      <div className={s.elem}>
        <h5 className="h5">1. Исходные данные</h5>
        <ul className="body-2">
          <li>Длина дома (L) = 8 м</li>
          <li>Ширина дома (W) = 10 м</li>
          <li>Высота стен (h) = 3 м</li>
          <li>Высота фронтона (H) = 2 м</li>
          <li>Количество фронтонов = 2</li>
          <li>Толщина наружной стены (Wстены) = 0,4 м</li>
          <li>Окна: 2 шт. по 1,5×1,2 м</li>
          <li>Дверь: 1 шт. 2,0×0,9 м</li>
        </ul>
      </div>

      <div className={s.elem}>
        <h5 className="h5">2. Площадь наружных стен</h5>
        <p className={'body-2'}>
          Sстен = 2 × h × (L + W) = 2 × 3 × (8 + 10) = 108 м²
        </p>
        <p className={'body-2'}>
          Комментарий: здесь расчет блоков арболита начинается с определения
          общей площади стен.
        </p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">3. Площадь фронтонов</h5>
        <p className="body-2">
          Площадь одного фронтона = 0,5 × W × H = 0,5 × 10 × 2 = 10 м²{' '}
        </p>
        <p className="body-2">Всего фронтонов: 2 × 10 = 20 м²</p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">4. Общая наружная площадь</h5>
        <p className="body-2">Sнаруж = 108 + 20 = 128 м²</p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">5. Площадь окон и дверей</h5>
        <p className="body-2">Окна: 2 × (1,5 × 1,2) = 3,6 м²</p>
        <p className="body-2">Дверь: 2,0 × 0,9 = 1,8 м²</p>
        <p className="body-2">Sокон/двер = 3,6 + 1,8 = 5,4 м²</p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">6. Чистая площадь наружных стен</h5>
        <p className="body-2">Sобщ = 128 – 5,4 = 122,6 м²</p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">7. Объём арболитовых блоков для наружных стен</h5>
        <p className="body-2">V = Sобщ × Wстены = 122,6 × 0,4 = 49,04 м³</p>
        <h5 className="h5">Расчет внутренних перегородок:</h5>
        <p className="body-2">Sстен=H⋅L</p>
        <p className="body-2">Sдвер=l⋅h</p>
        <p className="body-2">Sвнутр= Sстен - Sдвер</p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">8. Расчёт внутренних перегородок</h5>
        <p className="body-1">Предположим, что в доме есть:</p>
        <ul>
          <li className="body-2">
            Две перегородки по 4 м длиной и 3 м высотой
          </li>
          <li className="body-2">Одна перегородка длиной 8 м и высотой 3 м</li>
          <li className="body-2">Толщина перегородок — 0,2 м</li>
          <li className="body-2">Две двери по 2,0×0,8 м</li>
        </ul>
        <p className="body-2">Площадь перегородок = (4×3×2) + (8×3) = 48 м²</p>
        <p className="body-2">Площадь дверей = 2 × (2,0×0,8) = 3,2 м²</p>
        <p className="body-2">Чистая площадь = 48 – 3,2 = 44,8 м²</p>
        <p className="body-2">Объём = 44,8 × 0,2 = 8,96 м³</p>
      </div>

      <div className={s.elem}>
        <h5 className="h5">9. Итоговый расчёт количества арболитовых блоков</h5>
        <ul>
          <li className="body-2">Наружные стены: 49,04 м³</li>
          <li className="body-2">Внутренние перегородки: 8,96 м³</li>
        </ul>
        <p className="body-2">Всего: 58 м³</p>
        <p className="body-2">
          С учётом запаса 10%: около 64 м³ арболитовых блоков.
        </p>
      </div>

      <div className={s.elem}>
        <p className="h5">Итог</p>
        <p className="body-2">
          Используя Арболитовый калькулятор, можно быстро сделать расчет
          количества арболитовых блоков для любого проекта. В нашем примере дом
          10×8 метров с внутренними перегородками потребует примерно 64 м³
          блоков с учётом запаса. Такой подход позволяет планировать бюджет и
          закупку материалов максимально точно.
        </p>
      </div>
    </div>
  );
};
