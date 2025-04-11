import { OrderT } from '../types';

export async function createOrder(orderData: OrderT) {
  try {
    const res = await fetch(`${process.env.API_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    console.log(res);
  } catch (e) {
    console.error('Ошибка при отправке заказа:', e);
    throw new Error('Не удалось оформить заказ. Попробуйте позже.');
  }
}
