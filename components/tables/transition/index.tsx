import { CellTransition } from '@/components/tables/cells';
import Style from './transition.module.scss';
import { StaticImageData } from 'next/image';
import classNames from 'classnames';

type Props = {
  array: {
    linkImage: StaticImageData;
    text: string;
    linkPage: string;
    alt: string;
    additionalText?: string | null | undefined;
    targetBlank?: boolean | undefined;
  }[];
  reverse?: boolean;
};

const TableCells: {
  12: string;
  4: string;
  5: string;
} = {
  12: Style.Transition12,
  4: Style.Transition4,
  5: Style.Transition5,
};

export default function Transition({ array, reverse = false }: Props) {
  return (
    <div className={classNames(Style.Transition, reverse ? Style.Transition5Reverse : TableCells[array.length as keyof typeof TableCells])}>
      {array.map((elem, index) => (
        <CellTransition
          linkImage={elem.linkImage}
          text={elem.text}
          linkPage={elem.linkPage}
          alt={elem.alt}
          gridAreaNumber={index + 1}
          key={index}
          targetBlank={elem.targetBlank}
          additionalText={elem.additionalText}
        />
      ))}
    </div>
  );
}

type TransitionDown = {
  array: {
    linkImage: StaticImageData;
    text: string;
    linkPage: string;
    additionalText?: string | null | undefined;
    targetBlank?: boolean | undefined;
  }[];
};

export function TransitionDown({ array }: TransitionDown) {
  return (
    <div className={classNames(Style.Transition, Style.Transition3, Style.Transition3Left)}>
      {array.map((elem, index) => (
        <CellTransition
          linkImage={elem.linkImage}
          text={elem.text}
          linkPage={elem.linkPage}
          alt={elem.text}
          gridAreaNumber={index + 1}
          key={index}
          targetBlank={elem.targetBlank}
          additionalText={elem.additionalText}
        />
      ))}
    </div>
  );
}
