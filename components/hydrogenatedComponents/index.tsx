'use client';
import Header from './header';
import ButtonUp from './buttonUp';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function HydrogenatedComponents() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [asideStatus, setAsideStatus] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const resizeHeight = () => {
    setHeight(document.documentElement.clientHeight);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleHashChange = () => {
    setAsideStatus(false);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    resizeHeight();
    window.addEventListener('resize', resizeHeight);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeHeight);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    handleHashChange();
  }, [pathname, searchParams]);

  return (
    <>
      <Header scrollPosition={scrollPosition} asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
      <ButtonUp scrollPosition={scrollPosition} height={height} />
    </>
  );
}
