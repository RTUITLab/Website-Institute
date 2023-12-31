import { TransitionDown } from '@/components/tables/transition';
import { StaticImageData } from 'next/image';
import Style from './downTransition.module.scss';

type Props = {
  array: {
    linkImage: StaticImageData;
    text: string;
    linkPage: string;
    targetBlank?: boolean | undefined;
  }[];
  heading: string | null;
};

export default function DownTransition({ array, heading }: Props) {
  return (
    <section className={Style.Section}>
      <article>
        <div />
        <h2>{heading === null ? 'ДРУГИЕ СЕКЦИИ ПОРТАЛА' : heading}</h2>
        <div />
      </article>
      <TransitionDown array={array} />
    </section>
  );
}
