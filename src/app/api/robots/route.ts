export async function GET() {
  const res = await fetch(`${process.env.API_URL}/seo/robots.txt`);
  const text = await res.text();

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
