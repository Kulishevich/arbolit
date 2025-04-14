import { SettingT } from '../types';

export async function getSetting(): Promise<SettingT | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/design/settings`, {
      cache: 'no-store',
    });
    const res = await data.json();

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
}
