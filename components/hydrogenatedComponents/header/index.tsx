import Style from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/svg/iit_logo_header.svg';
import classNames from 'classnames';
import { ButtonMenuAside } from '@/components/buttons/clientButtons';
import ButtonMenuAsideImage from '@/public/svg/buttonMenuAside.svg';
import ButtonMenuAsideImageClose from '@/public/svg/cancel-01.svg';
import Aside from '../aside';

type Props = {
  scrollPosition: number;
  asideStatus: boolean;
  setAsideStatus: (asideStatus: boolean) => void;
};

export default function Header({ scrollPosition, asideStatus, setAsideStatus }: Props) {
  return (
    <>
      <header className={classNames(Style.Header, 84 < scrollPosition ? Style.BackgroundIIT : Style.BackgroundTransparent)}>
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
