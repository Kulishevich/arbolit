export async function GET() {
  const res = await fetch(`${process.env.API_URL}/seo/feed.xml`);
  const text = await res.text();

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
