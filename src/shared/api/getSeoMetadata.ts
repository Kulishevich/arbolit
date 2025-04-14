import { MetadataT } from '../types';

export async function getSeoMetadata(tag: string): Promise<MetadataT | null> {
  try {
    const data = await fetch(`${process.env.API_URL}/seo/tag?name=${tag}`, {
      cache: 'no-store',
    });

    const res = await data.json();

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
}
