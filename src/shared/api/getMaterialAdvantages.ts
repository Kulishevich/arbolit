import { MaterialAdvantagesT } from '../types';

export async function getMaterialAdvantages(): Promise<MaterialAdvantagesT | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/material-advantages`, {
      cache: 'no-store',
    });
    const sections = await data.json();

    return sections;
  } catch (e) {
    console.log(e);
    return null;
  }
}
