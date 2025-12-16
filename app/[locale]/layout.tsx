import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Box } from '@mui/material';
import { locales, type Locale } from '@/i18n';
import EmotionCacheProvider from '@/src/lib/emotion-cache';
import { MuiProvider } from '@/src/lib/mui-provider';
import { ThemeProvider } from '@/src/contexts/ThemeContext';
import { NavigationWrapper } from '@/src/components/Navigation/NavigationWrapper';
import { Footer } from '@/src/components/Footer';
import { CookieBannerWrapper } from '@/src/components/Cookies/CookieBannerWrapper';
import { AOSProvider } from '@/src/components/AOS/AOSProvider';
import type { Metadata } from 'next';
import '@/src/styles/index.scss';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: 'Epoxy Maestro - Premium Epoxy Flooring Solutions',
    description: 'Modern, scalable application with MUI, i18n, and SCSS',
    icons: {
      icon: '/logo.svg',
      shortcut: '/logo.svg',
      apple: '/logo.svg',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <meta name="emotion-insertion-point" content="" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress hydration warnings for Emotion class names
              // This is expected behavior with Emotion SSR
              if (typeof window !== 'undefined') {
                const originalError = console.error;
                console.error = function(...args) {
                  if (
                    typeof args[0] === 'string' &&
                    (args[0].includes('hydration') || args[0].includes('className') || args[0].includes('did not match'))
                  ) {
                    return;
                  }
                  originalError.apply(console, args);
                };
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
        <EmotionCacheProvider locale={locale as Locale}>
          <ThemeProvider>
            <MuiProvider locale={locale as Locale}>
              <NextIntlClientProvider messages={messages}>
                <Box sx={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
                  <AOSProvider />
                  <NavigationWrapper locale={locale as Locale} />
                  {children}
                  <Footer locale={locale as Locale} />
                  <CookieBannerWrapper locale={locale as Locale} />
                </Box>
              </NextIntlClientProvider>
            </MuiProvider>
          </ThemeProvider>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}

