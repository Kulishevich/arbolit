import { ProductT } from '../types';

export async function getProducts(): Promise<ProductT[] | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/products`, {
      cache: 'no-store',
    });

    const res = await data.json();
    const products = res.data;

    return products;
  } catch (e) {
    return null;
  }
}
