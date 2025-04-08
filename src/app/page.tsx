import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightOutlinedIcon,
} from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';

export default function Home() {
  return (
    <div className="h1">
      <Button variant="primary">заказать арболит</Button>
      <Button variant="callback">Обратный звонок</Button>
      <Button variant="primary_with_icon">
        Построить маршрут
        <ArrowRightOutlinedIcon />
      </Button>
      <Button variant="icon">
        <ArrowRightIcon />
      </Button>
      <Button variant="link">
        <ArrowLeftIcon />
        назад к новостям
      </Button>
      <Button variant="secondary">Подробнее</Button>
    </div>
  );
}
