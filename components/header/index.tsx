'use client';
import Style from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/svg/iit_logo_header.svg';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ButtonMenuAside } from '@/components/buttons/clientButtons';
import ButtonMenuAsideImage from '@/public/svg/buttonMenuAside.svg';
import ButtonMenuAsideImageClose from '@/public/svg/cancel-01.svg';
import Aside from '@/components/aside';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [asideStatus, setAsideStatus] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setScrollPosition(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={classNames(Style.Header, 100 < scrollPosition ? Style.BackgroundIIT : Style.BackgroundTransparent)}>
        <Link href={'/'}>
          <Image src={Logo} alt={'иит логотип'} />
          <h3>Институт информационных технологий РТУ МИРЭА</h3>
        </Link>
        <ButtonMenuAside onClick={() => setAsideStatus(true)} imageLink={ButtonMenuAsideImage} />
      </header>
      <Aside onClick={() => setAsideStatus(false)} imageLink={ButtonMenuAsideImageClose} hidden={asideStatus} />
    </>
  );
}
