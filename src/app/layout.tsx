import type { Metadata } from 'next';
import { Manrope, Noto_Sans } from 'next/font/google';
import './globals.scss';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import Script from 'next/script';
import { Toaster } from 'sonner';
import PhoneAnimation from '@/entities/phone-animation/PhoneAnimation';
import { getProducts } from '@/shared/api/getProducts';
import { getSeoMetadata } from '@/shared/api/getSeoMetadata';
import { getSetting } from '@/shared/api/getSetting';

const manropeSans = Manrope({
  variable: '--font-family',
  subsets: ['latin', 'cyrillic'],
});

const notoSans = Noto_Sans({
  variable: '--font6',
  subsets: ['latin', 'cyrillic'],
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSeoMetadata('home');

  return {
    title: data?.title ?? 'Арболит',
    description: data?.description ?? 'Арболит',
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title ?? data?.title,
      description: data?.og_description ?? data?.description,
    },
    icons: {
      icon: `${process.env.STORE_URL}/design/Z9lRYbNHzqhzbx61LC9PTf6CMbtUZATNiIPd7rzG.ico`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getProducts();
  const setting = await getSetting();

  return (
    <html lang="en">
      <body className={`${manropeSans.variable} ${notoSans.variable}`}>
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=ru_RU`}
          strategy="beforeInteractive"
        />
        <Header products={products} setting={setting} />
        {children}
        <Footer products={products} setting={setting} />
        <PhoneAnimation />
        <Toaster />
      </body>
    </html>
  );
}
