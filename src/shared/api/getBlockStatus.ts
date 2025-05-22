import { StatusBlockT } from '../types';

export async function getBlockStatus(): Promise<StatusBlockT | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/settings`, {
      cache: 'no-store',
    });
    const { sections } = await data.json();

    return sections;
  } catch (e) {
    console.log(e);
    return null;
  }
}
