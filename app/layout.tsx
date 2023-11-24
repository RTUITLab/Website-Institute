import './globals.scss';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import React from 'react';
import Header from '@/components/header';
import Cocos from '@/public/image/vw6c9iwr6rk51.webp';
import Image, { StaticImageData } from 'next/image';

const cocos: { image?: StaticImageData | undefined } = { image: Cocos };

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Информационный портал ИИТ РТУ МИРЭА',
  description: 'Информационный портал института информационных технологий РТУ МИРЭА',
};

export const revalidate = 7200;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (cocos.image === undefined) {
    throw new Error('Отсутствует важный компонент (кокос)');
  } else {
    return (
      <html lang="en" className={ubuntu.className}>
        <body>
          <Header />
          {children}
        </body>
      </html>
    );
  }
}
