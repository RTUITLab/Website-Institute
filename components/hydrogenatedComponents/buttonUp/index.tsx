import Link from 'next/link';
import Image from 'next/image';
import SvgButtonUp from '@/public/svg/arrow-up-01-round.svg';
import Style from './buttonUp.module.scss';
import classNames from 'classnames';

type Props = {
  scrollPosition: number;
  height: number;
};
export default function ButtonUp({ scrollPosition, height }: Props) {
  return (
    <Link className={classNames(Style.ButtonUp, height - 84 < scrollPosition ? Style.NoHide : Style.Hide)} href={'#' + 'menu'}>
      <Image src={SvgButtonUp} alt={''} />
    </Link>
  );
}
