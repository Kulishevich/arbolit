import { SeoTextT } from '../types';

export async function getSeoText(page: string): Promise<SeoTextT | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/seo/text?page=${page}`, {
      cache: 'no-store',
    });

    if (!data.ok) {
      return null;
    }

    const res = await data.json();

    return res.content;
  } catch (e) {
    console.log(e);
    return null;
  }
}
