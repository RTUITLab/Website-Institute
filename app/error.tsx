'use client'; // Error components must be Client Components
import Style from './error.module.scss';
import NextImage from '@/public/svg/error/nextjs-original-wordmark.svg';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={Style.Error}>
      <div>
        <Image src={NextImage} alt={'error_next'} />
        <h1>Упс, произошла ошибка во время рендеринга страницы.</h1>
        <h2 className={Style.h2Text}>
          Вы можете обратиться к представителям института информационных технологий РТУ МИРЭА, чтобы мы смогли исправить проблему.
        </h2>
      </div>
      <div>
        <h2>
          Ошибка: <span>{error.message}</span>
        </h2>
        <h2>
          Подробное описание: <span>{error.stack}</span>
        </h2>
      </div>
    </div>
  );
}
