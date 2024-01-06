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
  7: string;
  '7_Reverse': string;
  6: string;
  5: string;
  '5_Reverse': string;
  4: string;
  3: string;
  2: string;
} = {
  12: Style.Transition12,
  7: Style.Transition7,
  '7_Reverse': Style.Transition7Reverse,
  6: Style.Transition6,
  5: Style.Transition5,
  '5_Reverse': Style.Transition5Reverse,
  4: Style.Transition4,
  3: Style.Transition3,
  2: Style.Transition2,
};

const reverseCells: Record<number, boolean> = {
  5: true,
  7: true,
  // Добавьте необходимые значения для других количеств ячеек, если потребуется.
};

export default function Transition({ array, reverse = false }: Props) {
  const shouldReverse = reverseCells[array.length] || reverse;

  return (
    <div
      className={classNames(
        Style.Transition,
        shouldReverse
          ? TableCells[(array.length + '_Reverse') as keyof typeof TableCells]
          : TableCells[array.length as keyof typeof TableCells],
      )}>
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
