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
import { getBlockStatus } from '@/shared/api/getBlockStatus';

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
  const setting = await getSetting();

  return {
    title: data?.title ?? 'Арболит',
    description: data?.description ?? 'Арболит',
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title ?? data?.title,
      description: data?.og_description ?? data?.description,
    },
    icons: {
      icon: `${process.env.STORE_URL}/${setting?.favicon_path}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
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
  const blockStatus = await getBlockStatus();

  return (
    <html lang="ru">
      <head>
        {/* Подключаем Яндекс.Метрику */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){
                (m[i].a=m[i].a||[]).push(arguments)
              };
              m[i].l=1*new Date();
              k=e.createElement(t),
              a=e.getElementsByTagName(t)[0],
              k.async=1;
              k.src=r;
              a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(102330396, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>

        <meta name="yandex-verification" content="7bff8869bacf9f20" />
        <meta
          name="google-site-verification"
          content="jdzk3m9f97Z7R-7HvTXJJIobqehlyrKXJtkgIgQye6s"
        />
      </head>
      <body className={`${manropeSans.variable} ${notoSans.variable}`}>
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=ru_RU`}
          strategy="beforeInteractive"
        />
        <Header
          products={products}
          setting={setting}
          blockStatus={blockStatus}
        />
        {children}
        <Footer
          products={products}
          setting={setting}
          blockStatus={blockStatus}
        />
        <PhoneAnimation />
        <Toaster />
      </body>
    </html>
  );
}
