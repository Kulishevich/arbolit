export async function GET() {
  const res = await fetch(`${process.env.API_URL}/seo/sitemap.xml`);
  const xml = await res.text();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
