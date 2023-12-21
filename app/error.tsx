'use client'; // Error components must be Client Components
import React from 'react';
import Style from './error_and_nof_found.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import FallDown from '@/public/image/error/FallDown_result.webp';
import { ButtonDefault, ButtonLinkDefault } from '@/components/buttons';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const route = useRouter();

  return (
    <main className={Style.Page}>
      <div>
        <div className={Style.HeadingText}>
          <h1>Ooops... Error Page...</h1>
          <h1>Произошла ошибка</h1>
        </div>
        <p>
          К сожалению, на клиенте или сервере произошла ошибка, и в результате вы попали на эту страницу. Вы можете попытаться вернуться
          назад, исправить ошибку или начать с главной страницы для продолжения навигации. Спасибо за понимание.
        </p>
        <div className={Style.ButtonDiv}>
          <ButtonDefault onClick={() => route.back()} text={'ВЕРНУТЬСЯ НАЗАД'} />
          <ButtonLinkDefault link={'/'} text={'ГЛАВНАЯ СТРАНИЦЫ'} />
          <ButtonDefault text={'ИСПРАВИТЬ ОШИБКУ'} onClick={() => reset()} />
        </div>
      </div>
      <div>
        <Image src={FallDown} alt={''} />
      </div>
    </main>
  );
}
