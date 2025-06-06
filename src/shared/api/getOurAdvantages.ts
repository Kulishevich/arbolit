import { MaterialAdvantagesT, OurAdvantagesT } from '../types';

export async function getOurAdvantages(): Promise<OurAdvantagesT | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/design/advantages`, {
      cache: 'no-store',
    });
    const sections = await data.json();

    return sections;
  } catch (e) {
    console.log(e);
    return null;
  }
}
