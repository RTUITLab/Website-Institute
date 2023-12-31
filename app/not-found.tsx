'use client';
import React from 'react';
import Style from './errorAndNofFound.module.scss';
import Image from 'next/image';
import Question from '@/public/image/error/Question_result.webp';
import { ButtonDefault, ButtonLinkDefault } from '@/components/buttons';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const route = useRouter();

  return (
    <main className={Style.Page}>
      <div>
        <div className={Style.HeadingText}>
          <h1>Ooops... Page Not Found...</h1>
          <h1>Страница не найдена</h1>
        </div>
        <p>
          К сожалению, вы попали на несуществующую страницу, и в результате возникла ошибка 404 - страница не найдена. Пожалуйста,
          попробуйте вернуться назад или начать с главной страницы для продолжения навигации. Спасибо за понимание.
        </p>
        <div className={Style.ButtonDiv}>
          <ButtonDefault onClick={() => route.back()} text={'ВЕРНУТЬСЯ НАЗАД'} />
          <ButtonLinkDefault link={'/'} text={'ГЛАВНАЯ СТРАНИЦЫ'} />
        </div>
      </div>
      <div>
        <Image src={Question} alt={''} />
      </div>
    </main>
  );
}
